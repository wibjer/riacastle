define([ "backbone","jquery","underscore","jade!templates/main"],function(Backbone,$,_,template){
	return Backbone.View.extend({
		template: template,
		render: function(){
			this.$el.html(template({hello:"world"}));
			this.$("#nav").append(this.options.navView.render().el);
			this.$("#content").append(this.options.contentView.el);
			return this;
		},
		show: function(pageid,pagedef,subid){
			this.options.contentView.render(pageid,pagedef,subid);
			this.options.navView.setSection(pagedef.section);
		}
	});
});