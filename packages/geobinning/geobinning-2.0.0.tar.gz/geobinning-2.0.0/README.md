# Package Description #

Use `geobinning` to bucket [lng,lat] points based on a geojson geometry.  Any geojson that contains ID and polygon geometries will work, and the function returns back a dataframe with (ID,bins).


### Installation ###
`$ pip install geobinning`

### Usage ###
`import geopandas as gpd
import requests
import geobinning as gb

df_places  = gpd.read_file('https://opendata.arcgis.com/datasets/af500b5abb7240399853b35a2362d0c0_0.geojson')

polygons = []
for shp in df_places['geometry']:
    lng,lat = shp.exterior.coords.xy
    lng= list(lng)
    lat= list(lat)
    coords = list(map(list,zip(*[lng,lat])))
    polygons.append(coords)

bins = gb.geobin(polygons,[[-79,43],[-78,43.22]])`


### Example ###
