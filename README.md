# Angular6Breadcrumb

Basic example to display breadcrumb in Angular 6 project using native Angular router

See a demo at: https://prototype.breadcrumb.ranout.xyz

## Static part

Breadcrumb items are displayed from breadcrumb array declared in data object in each Route item :

```
  const ROUTES: Routes = [
    ...
    {
      path: "foo",
      component: MyComponent,
      data: {
        breadcrumbs: [
          new Breadcrumb(...)
        ]
      }
    }
    ...
  ]
```

## Dynamic part

To display a breadcrumb item dynamically, use the addItem method declared in the BreadcrumbProvider :

```
  class MyComponent {
    ...
    constructor(private breadcrumbProvider: BreadcrumbProvider) {
      this.breadcrumbProvider.addItem(new Breadcrumb(...));
    }
    ...
  }
```

If you choose to add a breadcrumb item dynamically, without setting breadcrumb array in Route item,
the breadcrumb item will be added to the existing breadcrumb.

## Default breadcrumb

In the case where component doesn't have static breadcrumb items, and item is added with provider (RecipeComponent in my example), 
if you dierctly access to component (via url), the breadcrumb will have just one item (the dynamic item you added).

To avoid this, you can set defaultBreadcrumbs array in data object in Route item.

```
  const ROUTES: Routes = [
    ...
    {
      path: "foo",
      component: MyComponent,
      data: {
        defaultBreadcrumbs: [
          new Breadcrumb(...)
        ]
      }
    }
    ...
  ]
```

Now, if you directly access to the component via url, like the current breadcrumb is empty, the defaultBreadcrumbs items will be displayed before your added item.

This is especially practical when a component can be accessible from several components and you want to choose one of them as default.

Here is a drawing to explain more simply :)

![Sitemap](http://ranout.xyz/angular6-breadcrumb/sitemap.jpg)
