(function(){
	app=angular.module('presentation-thumbnails',[])
	.directive('presentationThumbnails', [ function() {
		return {
			restrict: 'E',
			templateUrl: 'views/presentation-thumbnails.html',
			scope: {
				title:'=',
				file:'=',
				thumb:'='
			},
            link: function(scope, element, attrs) {
                // Thumbnails should be vertical sprites, with each side of sizes:
                var slideH = 200;
                var slideW = 267;

                var image = $(element.find('img'));
                image.load( function() {
                    var slides = image.height() / slideH;
                    var xDelta = slideW / slides;
                    image.mousemove(function (event){
                        var curSlide = Math.floor((event.pageX - image.position().left) /xDelta);
                        curSlide = ((curSlide < 0) ? 0 : curSlide);
                        curSlide = ((curSlide > slides) ? slides : curSlide);
                        image.css('top',-1 * slideH * curSlide + 'px');
                    });
                });
            }
		};
	}]);
})(this);
