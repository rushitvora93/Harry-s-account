app.config(function($translateProvider) {

	//English
    $translateProvider.translations('en-US', {
        'CAT': 'Category:',
        'LOCATION': 'Location:',
        'TYPE': 'Account Type',
        'SORT': 'Sort By Name',
        'DATA_NA': 'No Accounts Available!!',
        'ASC': 'Ascending',
        'DSC': 'Descending',
        'RESET': 'Reset'
    });

	//Spanish
    $translateProvider.translations('es-ES', {
        'CAT': 'Categoría:',
        'LOCATION': 'Ubicación:',
        'TYPE': 'Tipo de cuenta',
        'SORT': 'Ordenar por nombre',
        'DATA_NA': 'No hay Cuentas Disponibles !!',
        'ASC': 'Ascendente',
        'DSC': 'Descendente',
        'RESET': 'Reiniciar'
    });

    //It sets default language for your app
    $translateProvider.preferredLanguage('en-US');
});