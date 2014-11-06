(function(){
    app=angular.module('material',['presentation-thumbnails'])
    .controller('MaterialController',['$rootScope', '$scope', function($rootScope, $scope){
        $rootScope.title='TImpulsa - Material';
		$scope.materialM1=[
            {
                title: 'Clase 1',
                file: '/files/Modulo_1_Clase_1.pdf',
                thumb: '/images/thumb_M1C1.png'
            },
            {
                title: 'Clase 2',
                file: '/files/Modulo_1_Clase_2.pdf',
                thumb: '/images/thumb_M1C2.png'
            },
            {
                title: 'Clase 3',
                file: '/files/Modulo_1_Clase_3.pdf',
                thumb: '/images/thumb_M1C3.png'
            },
            {
                title: 'Clase 4',
                file: '/files/Modulo_1_Clase_4.pdf',
                thumb: '/images/thumb_M1C4.png'
            },
            {
                title: 'Proyecto',
                file: '/files/Modulo_1_Proyecto.pdf',
                thumb: '/images/thumb_M1P.png'
            }
        ];
        $scope.materialM2=[
            {
                title: 'Clase 1',
                file: '/files/Modulo_2_Clase_1.pdf',
                thumb: '/images/thumb_M2C1.png'
            },
            {
                title: 'Clase 2',
                file: '/files/Modulo_2_Clase_2.pdf',
                thumb: '/images/thumb_M2C2.png'
            },
            {
                title: 'Clase 3',
                file: '/files/Modulo_2_Clase_3.pdf',
                thumb: '/images/thumb_M2C3.png'
            },
            {
                title: 'Clase 4',
                file: '/files/Modulo_2_Clase_4.pdf',
                thumb: '/images/thumb_M2C4.png'
            }
        ];
	}])
})(this);
