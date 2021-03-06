# Examples
## Basic Inputs
Full list of built-it components can be found [here](/guide/#built-in-components).

<Demo schema-name="basic"/>

[![Edit on Codesandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/vue-jsonschema-form-basic-example-ulwwy?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.vue&theme=dark)

## Nested Object
Nesting objects is supported. If you want to omit nested object's property name displayed - set it's `title` property to empty string.
<Demo schema-name="nested"/>

## Array of Objects
To specify schema for each array element, provide `items` parameter inside array parameter schema.
<Demo schema-name="arrayOfObjects"/>

## Validations
Supported rules: `minLength` and `maxLength` for strings, `minimum` and `maximum` for numbers.
<Demo schema-name="home"/>

## Conditions
If condition is met, schema is merged with schema inside `then`. Minimum length (`minLength`) and equality (`const`) conditions are supported. Also `oneOf` (condition is met if only one `if` is met) and `allOf` (condition is met if all `if`s are met) combinations can be used. This is usefull when you want to display different parts of schema based on some parameter's value or when you want to validate some parts of the schema conditionally.

Try typing in `Vue`.
<Demo schema-name="conditions"/>

`oneOf` usage example. Condition is met when `a` is `Vue` or `React`.
<Demo schema-name="conditionsOneOf"/>

`allOf` usage example. Condition is met when a is `Vue` and `c` is `true`.
<Demo schema-name="conditionsAllOf"/>

`allOf` can also be used on the top level to implement multiple conditions. Try setting `a` to `Vue` and to `React`.
<Demo schema-name="conditionsAllOfSeveral"/>

## Default Values
Sometimes, usually when initializing a new data instance, you would want to use some default values. Full data model object with default values is emitted after initialization through a `@init-default` event.
``` vue
<JsonSchema :schema="schema" v-model="dataModel" @init-default="dataModel = $event"/>
```
<Demo schema-name="defaults" :use-defaults="true"/>

## UI Schema
### Using specific UI component
<Demo schema-name="radio" :use-ui-schema="true" :use-defaults="true"/>
### Setting display order
Setting `order` property in UI schema will set the order for displaying corresponding components. The bigger `order` - the higher the component will be displayed.
<Demo schema-name="order" :use-ui-schema="true" :use-defaults="true"/>

## Custom Components
Example showcases usage with some [Vuetify](https://vuetifyjs.com/) components. Using `uiSchema` is a convinient way to use specific components for some use-cases (e.g. Datepicker).
<Demo schema-name="customComponents" :use-ui-schema="true" :use-custom-components="true"/>

<SourceCode title="Components Config">
<<< @/docs/.vuepress/customComponentsConfig.js
</SourceCode>

## Custom Wrapper Component
In this case we use `CustomWrapper.vue` as componet to align labels and inputs horizontally.
<Demo schema-name="basic" :use-custom-wrapper="true"/>

<SourceCode title="CustomWrapper.vue">
<<< @/docs/.vuepress/components/CustomWrapper.vue
</SourceCode>

<SourceCode title="Wrapper Config">
<<< @/docs/.vuepress/customWrapperConfig.js
</SourceCode>