# VueJS Version 3

This VueJS basics SPA (Single Page Application) is covered in this video [Vue.js Course for Beginners](https://www.youtube.com/watch?v=FXpIoQ_rT_c)

Presented by [Gwendolyn Faraday](https://github.com/gwenf) on [Free Code Camp](freeCodeCamp.org).

Big thanks to Gwen for creating this roughly 3.5 hour video & covering commonly used directives, events, methods, components & concepts in general. 

#### Directives:
- v-model
- v-if (removing from the DOM)
- v-show (display: none, however more performant)
- v-on (events)
- v-bind
- @click

#### Modifers:
- @keyup.enter
- @keyup.right
- @keyup.prevent.stop

#### Lifecycle Hooks (Registering Lifecycle Hooks)[https://vuejs.org/guide/essentials/lifecycle.html#registering-lifecycle-hooks] 

- Check if user is authorized
- API Calls
- Creating or removing events
- Getting or cleaning up data

Common Lifecycle hooks
- beforeCreate()
- created()
- beforeMount()
- mounted()
- beforeUpdate()
- updated()
- beforeUnmount()
- unmounted


#### Curious Questions

1. Why does v-cloak need to be manually added? This should be added to VueJS's base code by default.


