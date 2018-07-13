/*
 * This file is part of the Ubud Skeleton package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
export class PositionService {
    public offset(el: HTMLElement): { width: number; height: number; top: number; left: number } {
        const boundingClient = el.getBoundingClientRect();

        return {
            width: boundingClient.width || el.offsetWidth,
            height: boundingClient.height || el.offsetHeight,
            top: boundingClient.top + (this.window.pageYOffset || this.document.documentElement.scrollTop),
            left: boundingClient.left + (this.window.pageXOffset || this.document.documentElement.scrollLeft),
        };
    }

    public position(el: HTMLElement): { width: number; height: number; top: number; left: number } {
        const offsetElBoundingClient = this.offset(el);
        const offsetParentEl = this.parentOffset(el);
        let offsetParentBoundingClient = { top: 0, left: 0 };

        if (offsetParentEl !== (this.document as any)) {
            offsetParentBoundingClient = this.offset(offsetParentEl);
            offsetParentBoundingClient.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
            offsetParentBoundingClient.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
        }

        const boundClient = el.getBoundingClientRect();

        return {
            width: boundClient.width || el.offsetWidth,
            height: boundClient.height || el.offsetHeight,
            top: offsetElBoundingClient.top - offsetParentBoundingClient.top,
            left: offsetElBoundingClient.left - offsetParentBoundingClient.left,
        };
    }

    public positionElements(
        hostEl: HTMLElement,
        targetEl: HTMLElement,
        position: string,
        appendToBody: boolean,
    ): { top: number; left: number } {
        const positionParts = position.split('-');
        const pos0 = positionParts[0];
        const pos1 = positionParts[1] || 'center';
        const hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);
        const targetElWidth = targetEl.offsetWidth;
        const targetElHeight = targetEl.offsetHeight;

        const width: any = {
            center: (): number => {
                return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
            },

            left: (): number => {
                return hostElPos.left;
            },

            right: (): number => {
                return hostElPos.left + hostElPos.width;
            },
        };

        const height: any = {
            center: (): number => {
                return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
            },

            top: (): number => {
                return hostElPos.top;
            },

            bottom: (): number => {
                return hostElPos.top + hostElPos.height;
            },
        };

        let newPosition: { top: number; left: number };

        switch (pos0) {
            case 'right':
                newPosition = {
                    top: height[pos1](),
                    left: width[pos0](),
                };
                break;

            case 'left':
                newPosition = {
                    top: height[pos1](),
                    left: hostElPos.left - targetElWidth,
                };
                break;

            case 'bottom':
                newPosition = {
                    top: height[pos0](),
                    left: width[pos1](),
                };
                break;

            default:
                newPosition = {
                    top: hostElPos.top - targetElHeight,
                    left: width[pos1](),
                };
                break;
        }

        return newPosition;
    }

    protected get window(): Window {
        return window;
    }

    protected get document(): Document {
        return this.window.document;
    }

    protected getStyle(el: HTMLElement, css: string): string {
        // IE
        if ((el as any).currentStyle) {
            return (el as any).currentStyle[css];
        }

        if (this.window.getComputedStyle) {
            return (this.window.getComputedStyle(el) as any)[css];
        }

        return (el.style as any)[css];
    }

    protected isStaticPositioned(el: HTMLElement): boolean {
        return 'static' === (this.getStyle(el, 'position') || 'static');
    }

    protected parentOffset(el: HTMLElement): any {
        let offsetParent: any = el.offsetParent || this.document;
        while (offsetParent && offsetParent !== this.document && this.isStaticPositioned(offsetParent)) {
            offsetParent = offsetParent.offsetParent;
        }

        return offsetParent || this.document;
    }
}

export const positionService: PositionService = new PositionService();
