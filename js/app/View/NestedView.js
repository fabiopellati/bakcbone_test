define('View/NestedView',
    [
        'underscore',
        'backbone',
    ],
    function (_, Backbone) {
        var NestedView;
        NestedView = Backbone.View.extend({
            tagName: 'div',
            subViews: [],
            subData: '',
            initialize: function (options) {
                if (typeof options.subData != 'undefined') {
                    this.subData = options.subData;
                }
                if (typeof options.subViews != 'undefined') {
                    this.subViews = options.subViews;
                }
                if (typeof options.itera != 'undefined') {
                    this.itera = options.itera;
                }
                _.bindAll(this, 'render');
                if(typeof this.collection !== 'undefined'){
                    this.collection.bind('sync', this.render, this);

                }

            },
            render: function () {
                this.$el.empty();

                var iterable = this.itera();
                if (typeof iterable !== 'undefined') {
                    _.each(iterable, function (item) {
                        _.each(this.subViews, function (View) {
                            this.$el.append(
                                (new View({subData: item})).render().el
                            );
                        }, this)
                    }, this);

                } else {
                    this.$el.append(this.subData);
                }
                return this;
            },
            getContainer: function () {
                var container = jQuery('<' + this.tagName + '>');
                return container;
            },
            itera: function () {
            }
        });
        return NestedView;
    }
);
