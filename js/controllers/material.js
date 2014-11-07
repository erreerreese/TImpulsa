(function(){
    app=angular.module('material',['presentation-thumbnails'])
    .controller('MaterialController',['$rootScope', '$scope', function($rootScope, $scope){
        $rootScope.title='TImpulsa - Material';
		$scope.materialM1=[
            {
                title: 'Clase 1',
                file: '/files/Modulo1Clase1.pdf',
                thumb: '/images/thumb_M1C1.png'
            },
            {
                title: 'Clase 2',
                file: '/files/Modulo1Clase2.pdf',
                thumb: '/images/thumb_M1C2.png'
            },
            {
                title: 'Clase 3',
                file: '/files/Modulo1Clase3.pdf',
                thumb: '/images/thumb_M1C3.png'
            },
            {
                title: 'Clase 4',
                file: '/files/Modulo1Clase4.pdf',
                thumb: '/images/thumb_M1C4.png'
            },
            {
                title: 'Proyecto 1',
                file: '/files/Modulo1Proyecto1.pdf',
                thumb: '/images/thumb_M1P1.png'
            }
        ];
        $scope.materialM2=[
            {
                title: 'Clase 1',
                file: '/files/Modulo2Clase1.pdf',
                thumb: '/images/thumb_M2C1.png'
            },
            {
                title: 'Clase 2',
                file: '/files/Modulo2Clase2.pdf',
                thumb: '/images/thumb_M2C2.png'
            },
            {
                title: 'Clase 3',
                file: '/files/Modulo2Clase3.pdf',
                thumb: '/images/thumb_M2C3.png'
            },
            {
                title: 'Clase 4',
                file: '/files/Modulo2Clase4.pdf',
                thumb: '/images/thumb_M2C4.png'
            },
            {
                title: 'Clase 5',
                file: '/files/Modulo2Clase5.pdf',
                thumb: '/images/thumb_M2C5.png'
            }
        ];
	}])
})(this);
