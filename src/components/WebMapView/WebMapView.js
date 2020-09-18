import React, { useEffect, useRef} from 'react';
import { loadModules } from 'esri-loader';
import "./WebMapView.css";

export const WebMapView = (props) => {

  const mapRef = useRef();

  
  //Creating the map itself, should only be effected when center is changed. 
  useEffect(
    () => {
      // lazy load the required ArcGIS API for JavaScript modules and CSS
      loadModules(['esri/Map', 'esri/views/MapView', "esri/Graphic", "esri/geometry/Circle",
      "esri/layers/GraphicsLayer"], { css: true })
        .then(([ArcGISMap, MapView, Graphic, Circle,GraphicsLayer]) => {
          const map = new ArcGISMap({
            basemap: 'satellite'
          });
           // load the map view at the ref's DOM node
           const view = new MapView({
            container: mapRef.current,
            map: map,
            center: [props.longitude, props.latitude],
            zoom: 11
          });


  
          //Creating the fill for the circle
          var simpleFillSymbol = {
            type: "simple-fill",
            color: [253, 171, 159, 0.3], // salmon, opacity of 80%
            outline: {
              color: [0, 0, 0, 0.2],
              width: 1
            }
          };
  
          //First circle
          var circleOuter = new Circle({
            center: [props.longitude, props.latitude],
            type: "polygon",
            radiusUnit: "kilometers",
            radius: 9
          });
  
          var outerGraphic = new Graphic({
            geometry: circleOuter,
            symbol: simpleFillSymbol
          });
  
          //Middle circle of the explosion
          var circleMiddle = new Circle({
            center: [props.longitude, props.latitude],
            type: "polygon",
            radiusUnit: "kilometers",
            radius: 5
          });
  
          var middleGraphic = new Graphic({
            geometry: circleMiddle,
            symbol: simpleFillSymbol
          });
  
          var circleInner = new Circle({
            center: [props.longitude, props.latitude],
            type: "polygon",
            radiusUnit: "kilometers",
            radius: 3.2
          });
  
          var innerGraphic = new Graphic({
            geometry: circleInner,
            symbol: simpleFillSymbol
          });

          //Insert bad logic here, gotta fix later
          if(props.isOuterCircle === true){
            view.graphics.add(outerGraphic);
          } 
          if(props.isMiddleCircle === true){
            view.graphics.add(middleGraphic);
          }
          if(props.isInnerCircle === true){
            view.graphics.add(innerGraphic);
          }
          
        });
    }, [props.longitude,props.latitude, props.isOuterCircle, props.isMiddleCircle, props.isInnerCircle],
  );

  

  
  return (
    <div className="WebMapView" >
      <div className="webmap" ref={mapRef} />
    </div>
  );
};

export default WebMapView;