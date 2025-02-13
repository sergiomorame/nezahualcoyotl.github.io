var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Nezahualcoyotl_1 = new ol.format.GeoJSON();
var features_Nezahualcoyotl_1 = format_Nezahualcoyotl_1.readFeatures(json_Nezahualcoyotl_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nezahualcoyotl_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nezahualcoyotl_1.addFeatures(features_Nezahualcoyotl_1);
var lyr_Nezahualcoyotl_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nezahualcoyotl_1, 
                style: style_Nezahualcoyotl_1,
                popuplayertitle: 'Nezahualcoyotl',
                interactive: false,
                title: '<img src="styles/legend/Nezahualcoyotl_1.png" /> Nezahualcoyotl'
            });
var format_colonias_2 = new ol.format.GeoJSON();
var features_colonias_2 = format_colonias_2.readFeatures(json_colonias_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_colonias_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_colonias_2.addFeatures(features_colonias_2);
var lyr_colonias_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_colonias_2, 
                style: style_colonias_2,
                popuplayertitle: 'colonias',
                interactive: true,
                title: '<img src="styles/legend/colonias_2.png" /> colonias'
            });
var format_Incindencias_3 = new ol.format.GeoJSON();
var features_Incindencias_3 = format_Incindencias_3.readFeatures(json_Incindencias_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Incindencias_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Incindencias_3.addFeatures(features_Incindencias_3);
var lyr_Incindencias_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Incindencias_3, 
                style: style_Incindencias_3,
                popuplayertitle: 'Incindencias',
                interactive: true,
    title: 'Incindencias<br />\
    <img src="styles/legend/Incindencias_3_0.png" /> Solicitud de pipa<br />\
    <img src="styles/legend/Incindencias_3_1.png" /> Falta de agua<br />'
        });

lyr_Positron_0.setVisible(true);lyr_Nezahualcoyotl_1.setVisible(true);lyr_colonias_2.setVisible(true);lyr_Incindencias_3.setVisible(true);
var layersList = [lyr_Positron_0,lyr_Nezahualcoyotl_1,lyr_colonias_2,lyr_Incindencias_3];
lyr_Nezahualcoyotl_1.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'cveigecem': 'cveigecem', 'cveinegi': 'cveinegi', 'nom_mun': 'nom_mun', 'iddeleg': 'iddeleg', 'area_km2_o': 'area_km2_o', 'area_km2': 'area_km2', 'PobTotal': 'PobTotal', });
lyr_colonias_2.set('fieldAliases', {'cve_igecem': 'cve_igecem', 'nom_mun': 'nom_mun', 'nom_col': 'nom_col', 'area_m': 'area_m', });
lyr_Incindencias_3.set('fieldAliases', {'Marca temp': 'Marca temp', 'Tipo de pr': 'Tipo de pr', 'Nombre(s)': 'Nombre(s)', 'Apellido(s': 'Apellido(s', 'Telefono a': 'Telefono a', 'Municipio': 'Municipio', 'Colonia/Ba': 'Colonia/Ba', 'Avenida/Bo': 'Avenida/Bo', 'Numero ext': 'Numero ext', 'Numero Int': 'Numero Int', 'Codigo Pos': 'Codigo Pos', 'Manzana/Lo': 'Manzana/Lo', 'Lugar de r': 'Lugar de r', 'Lat': 'Lat', 'Long': 'Long', });
lyr_Nezahualcoyotl_1.set('fieldImages', {'qc_id': 'TextEdit', 'id': 'TextEdit', 'cveigecem': 'TextEdit', 'cveinegi': 'TextEdit', 'nom_mun': 'TextEdit', 'iddeleg': 'TextEdit', 'area_km2_o': 'TextEdit', 'area_km2': 'TextEdit', 'PobTotal': 'TextEdit', });
lyr_colonias_2.set('fieldImages', {'cve_igecem': 'TextEdit', 'nom_mun': 'TextEdit', 'nom_col': 'TextEdit', 'area_m': 'TextEdit', });
lyr_Incindencias_3.set('fieldImages', {'Marca temp': 'TextEdit', 'Tipo de pr': 'TextEdit', 'Nombre(s)': 'TextEdit', 'Apellido(s': 'TextEdit', 'Telefono a': 'TextEdit', 'Municipio': 'TextEdit', 'Colonia/Ba': 'TextEdit', 'Avenida/Bo': 'TextEdit', 'Numero ext': 'TextEdit', 'Numero Int': 'TextEdit', 'Codigo Pos': 'TextEdit', 'Manzana/Lo': 'TextEdit', 'Lugar de r': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', });
lyr_Nezahualcoyotl_1.set('fieldLabels', {'qc_id': 'hidden field', 'id': 'hidden field', 'cveigecem': 'hidden field', 'cveinegi': 'hidden field', 'nom_mun': 'hidden field', 'iddeleg': 'hidden field', 'area_km2_o': 'hidden field', 'area_km2': 'no label', 'PobTotal': 'no label', });
lyr_colonias_2.set('fieldLabels', {'cve_igecem': 'hidden field', 'nom_mun': 'hidden field', 'nom_col': 'hidden field', 'area_m': 'hidden field', });
lyr_Incindencias_3.set('fieldLabels', {'Marca temp': 'inline label - always visible', 'Tipo de pr': 'inline label - always visible', 'Nombre(s)': 'hidden field', 'Apellido(s': 'hidden field', 'Telefono a': 'hidden field', 'Municipio': 'hidden field', 'Colonia/Ba': 'hidden field', 'Avenida/Bo': 'hidden field', 'Numero ext': 'hidden field', 'Numero Int': 'hidden field', 'Codigo Pos': 'hidden field', 'Manzana/Lo': 'hidden field', 'Lugar de r': 'hidden field', 'Lat': 'hidden field', 'Long': 'hidden field', });
lyr_Incindencias_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});