/*
 * This file is part of the Ubud Skeleton package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {
    ApplicationRef,
    ComponentFactoryResolver,
    ComponentRef,
    Injectable,
    Injector,
    ReflectiveInjector,
    ResolvedReflectiveProvider,
    Type,
    ViewContainerRef,
} from '@angular/core';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
@Injectable({
    providedIn: 'root',
})
export class ComponentService {
    private root: ViewContainerRef;

    public constructor(
        private readonly applicationRef: ApplicationRef,
        private readonly componentFactoryResolver: ComponentFactoryResolver,
    ) {}

    public set rootViewContainer(root: ViewContainerRef) {
        this.root = root;
    }

    public get rootViewContainer(): ViewContainerRef {
        if (this.root) {
            return this.root;
        }

        const comps = this.applicationRef.components;
        if (!comps.length) {
            throw new Error('ApplicationRef instance not found');
        }

        try {
            const root = (this.applicationRef as any)._rootComponents[0];
            this.root = root._hostElement.vcRef;

            return this.root;
        } catch (e) {
            throw new Error('ApplicationRef instance not found');
        }
    }

    public appendNextToLocation<T>(
        component: Type<T>,
        location: ViewContainerRef,
        providers?: ResolvedReflectiveProvider[],
    ): ComponentRef<T> {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        const parentInjector = location.parentInjector;
        let childInjector: Injector = parentInjector;

        if (providers && providers.length > 0) {
            childInjector = ReflectiveInjector.fromResolvedProviders(providers, parentInjector);
        }

        return location.createComponent(componentFactory, location.length, childInjector);
    }

    public appendNextToRoot<T>(component: Type<T>, componentOptions: any, options: any): ComponentRef<T> {
        const location = this.rootViewContainer;
        const providers = ReflectiveInjector.resolve([
            {
                provide: componentOptions,
                useValue: options,
            },
        ]);

        return this.appendNextToLocation(component, location, providers);
    }
}
