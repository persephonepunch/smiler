Router = Ember.Router.extend({
  location: ENV.locationType
})

Router.map ->
  @resource('experiments', ->
    @route('new')
  )
  @resource('experiment', { path: '/experiment/:experiment_id' }, ->
    @route('vote-list')
    @route('heartbeat')
  )

`export default Router;`
