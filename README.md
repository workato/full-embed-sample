# Embedding Guide

There are two recommended ways to embed Workato into another web application:
1. Classic approach
2. SPA approach (Coming soon)

## Classic approach

This approach is less performant but much easier to implement: 

1. Create a mapping between Workato URLs and internal URLs and make this configuration available in both server- and client-side code:  
    
    For example:

    | Workato URL     | OEM Vendor URL      |
    | ----------------| --------------------|
    | `/`             |  `/solutions`       |
    | `/recipes/:id`  |  `/solutions/:id`   |
    | `/recipes/new`  |  `/create-solution` |
    | ...             |	...                 |

2. On request to one of `OEM Vendor URL`s find corresponding `Workato URL` and use it to construct IFrame's `src` attribute.  

    For example user loads `/solutions/5` page. It corresponds to Workato's `/recipes/5` page so we generate an HTML page
    which renders `<iframe src="https://workato.com/recipes/5">`.

3. Inject a `Workato Embedding Client` script on every page that contain this IFrame: `<script src="https://workato.com/embedding-client.js">`.
  
    There are a few important things to note:
    - It should be injected **before** the `<iframe>` element.
    - It shouldn't contain neither `async` nor `defer` attributes as it must be loaded synchronously before an IFrame.
    
    It creates a global `WorkatoApi` object that allows to control embedded Workato web app.
    
4. Inject the following script **after** the "Workato Embedding Client" script:
    ```js
    // Subscribing to `navigation` event which is fired by the embedded Workato app when user attempts to load
    // another page e.g. when he clicks on some link.
    WorkatoApi.on('navigation', function (navigation) {
      // Finding corresponding URL using a mapping created on step 1.
      // Workato URL is stored in `navigation.url` property.
      // `findInternalUrl` function should be implemented by OEM vendor.
      var url = findInternalUrl(navigation.url);
      
      // Loading a new page if we've found a mapping and this is not the current page.
      // `isCurrentUrl` function should be implemented by OEM vendor.
      // For example, it may look like this: `return url === location.pathname`.
      if (url && !isCurrentUrl(url)) {
        location.href = url;
      }
    });
    ```

5. Use normal links to perform navigations between pages e.g. `<a href="/solutions/5">` will load a page containing
    `<iframe src="https://workato.com/recipes/5">`.
   

