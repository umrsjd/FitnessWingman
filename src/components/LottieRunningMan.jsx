import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { useInView } from 'framer-motion';

// Running man animation data
const animationData = {
  "v":"5.7.4",
  "fr":30,
  "ip":0,
  "op":60,
  "w":300,
  "h":300,
  "nm":"Running Man",
  "ddd":0,
  "assets":[],
  "layers":[
    {
      "ddd":0,
      "ind":1,
      "ty":4,
      "nm":"Running Man",
      "sr":1,
      "ks":{
        "o":{"a":0,"k":100,"ix":11},
        "r":{"a":0,"k":0,"ix":10},
        "p":{"a":1,"k":[
          {"i":{"x":0.1,"y":1},"o":{"x":0.9,"y":0},"t":0,"s":[150,150,0],"to":[0,-10,0],"ti":[0,0,0]},
          {"i":{"x":0.1,"y":1},"o":{"x":0.9,"y":0},"t":15,"s":[150,90,0],"to":[0,0,0],"ti":[0,-10,0]},
          {"i":{"x":0.1,"y":1},"o":{"x":0.9,"y":0},"t":30,"s":[150,150,0],"to":[0,0,0],"ti":[0,0,0]},
          {"i":{"x":0.1,"y":1},"o":{"x":0.9,"y":0},"t":45,"s":[150,90,0],"to":[0,0,0],"ti":[0,-10,0]},
          {"t":60,"s":[150,150,0]}
        ],"ix":2},
        "a":{"a":0,"k":[0,0,0],"ix":1},
        "s":{"a":0,"k":[100,100,100],"ix":6}
      },
      "ao":0,
      "shapes":[
        {
          "ty":"gr",
          "it":[
            {
              "ty":"el",
              "p":{"a":0,"k":[0,0],"ix":1},
              "s":{"a":0,"k":[40,40],"ix":2},
              "d":1,
              "nm":"Head",
              "mn":"ADBE Vector Shape - Ellipse",
              "hd":false
            },
            {
              "ty":"st",
              "c":{"a":0,"k":[0.39,0.42,1,1],"ix":3},
              "o":{"a":0,"k":100,"ix":4},
              "w":{"a":0,"k":5,"ix":5},
              "lc":2,
              "lj":1,
              "ml":4,
              "bm":0,
              "nm":"Stroke",
              "mn":"ADBE Vector Graphic - Stroke",
              "hd":false
            },
            {
              "ty":"tr",
              "p":{"a":0,"k":[0,-50],"ix":2},
              "a":{"a":0,"k":[0,0],"ix":1},
              "s":{"a":0,"k":[100,100],"ix":3},
              "r":{"a":0,"k":0,"ix":6},
              "o":{"a":0,"k":100,"ix":7},
              "sk":{"a":0,"k":0,"ix":4},
              "sa":{"a":0,"k":0,"ix":5},
              "nm":"Transform"
            }
          ],
          "nm":"Head",
          "np":2,
          "cix":2,
          "bm":0,
          "ix":1,
          "mn":"ADBE Vector Group",
          "hd":false
        },
        {
          "ty":"gr",
          "it":[
            {
              "ty":"rc",
              "d":1,
              "s":{"a":0,"k":[5,60],"ix":2},
              "p":{"a":0,"k":[0,0],"ix":3},
              "r":{"a":0,"k":0,"ix":4},
              "nm":"Body",
              "mn":"ADBE Vector Shape - Rect",
              "hd":false
            },
            {
              "ty":"st",
              "c":{"a":0,"k":[0.39,0.42,1,1],"ix":3},
              "o":{"a":0,"k":100,"ix":4},
              "w":{"a":0,"k":5,"ix":5},
              "lc":2,
              "lj":1,
              "ml":4,
              "bm":0,
              "nm":"Stroke",
              "mn":"ADBE Vector Graphic - Stroke",
              "hd":false
            },
            {
              "ty":"tr",
              "p":{"a":0,"k":[0,-20],"ix":2},
              "a":{"a":0,"k":[0,0],"ix":1},
              "s":{"a":0,"k":[100,100],"ix":3},
              "r":{"a":0,"k":0,"ix":6},
              "o":{"a":0,"k":100,"ix":7},
              "sk":{"a":0,"k":0,"ix":4},
              "sa":{"a":0,"k":0,"ix":5},
              "nm":"Transform"
            }
          ],
          "nm":"Body",
          "np":2,
          "cix":2,
          "bm":0,
          "ix":2,
          "mn":"ADBE Vector Group",
          "hd":false
        },
        {
          "ty":"gr",
          "it":[
            {
              "ty":"rc",
              "d":1,
              "s":{"a":0,"k":[5,40],"ix":2},
              "p":{"a":0,"k":[0,0],"ix":3},
              "r":{"a":0,"k":0,"ix":4},
              "nm":"Arm",
              "mn":"ADBE Vector Shape - Rect",
              "hd":false
            },
            {
              "ty":"st",
              "c":{"a":0,"k":[0.39,0.42,1,1],"ix":3},
              "o":{"a":0,"k":100,"ix":4},
              "w":{"a":0,"k":5,"ix":5},
              "lc":2,
              "lj":1,
              "ml":4,
              "bm":0,
              "nm":"Stroke",
              "mn":"ADBE Vector Graphic - Stroke",
              "hd":false
            },
            {
              "ty":"tr",
              "p":{"a":1,"k":[
                {"i":{"x":0.1,"y":1},"o":{"x":0.9,"y":0},"t":0,"s":[-20,-20],"to":[6.667,0],"ti":[0,0]},
                {"i":{"x":0.1,"y":1},"o":{"x":0.9,"y":0},"t":15,"s":[20,-20],"to":[0,0],"ti":[6.667,0]},
                {"i":{"x":0.1,"y":1},"o":{"x":0.9,"y":0},"t":30,"s":[-20,-20],"to":[0,0],"ti":[0,0]},
                {"i":{"x":0.1,"y":1},"o":{"x":0.9,"y":0},"t":45,"s":[20,-20],"to":[0,0],"ti":[6.667,0]},
                {"t":60,"s":[-20,-20]}
              ],"ix":2},
              "a":{"a":0,"k":[0,0],"ix":1},
              "s":{"a":0,"k":[100,100],"ix":3},
              "r":{"a":1,"k":[
                {"i":{"x":[0.1],"y":[1]},"o":{"x":[0.9],"y":[0]},"t":0,"s":[45]},
                {"i":{"x":[0.1],"y":[1]},"o":{"x":[0.9],"y":[0]},"t":15,"s":[-45]},
                {"i":{"x":[0.1],"y":[1]},"o":{"x":[0.9],"y":[0]},"t":30,"s":[45]},
                {"i":{"x":[0.1],"y":[1]},"o":{"x":[0.9],"y":[0]},"t":45,"s":[-45]},
                {"t":60,"s":[45]}
              ],"ix":6},
              "o":{"a":0,"k":100,"ix":7},
              "sk":{"a":0,"k":0,"ix":4},
              "sa":{"a":0,"k":0,"ix":5},
              "nm":"Transform"
            }
          ],
          "nm":"Left Arm",
          "np":2,
          "cix":2,
          "bm":0,
          "ix":3,
          "mn":"ADBE Vector Group",
          "hd":false
        },
        {
          "ty":"gr",
          "it":[
            {
              "ty":"rc",
              "d":1,
              "s":{"a":0,"k":[5,40],"ix":2},
              "p":{"a":0,"k":[0,0],"ix":3},
              "r":{"a":0,"k":0,"ix":4},
              "nm":"Arm",
              "mn":"ADBE Vector Shape - Rect",
              "hd":false
            },
            {
              "ty":"st",
              "c":{"a":0,"k":[0.39,0.42,1,1],"ix":3},
              "o":{"a":0,"k":100,"ix":4},
              "w":{"a":0,"k":5,"ix":5},
              "lc":2,
              "lj":1,
              "ml":4,
              "bm":0,
              "nm":"Stroke",
              "mn":"ADBE Vector Graphic - Stroke",
              "hd":false
            },
            {
              "ty":"tr",
              "p":{"a":1,"k":[
                {"i":{"x":0.1,"y":1},"o":{"x":0.9,"y":0},"t":0,"s":[20,-20],"to":[-6.667,0],"ti":[0,0]},
                {"i":{"x":0.1,"y":1},"o":{"x":0.9,"y":0},"t":15,"s":[-20,-20],"to":[0,0],"ti":[-6.667,0]},
                {"i":{"x":0.1,"y":1},"o":{"x":0.9,"y":0},"t":30,"s":[20,-20],"to":[0,0],"ti":[0,0]},
                {"i":{"x":0.1,"y":1},"o":{"x":0.9,"y":0},"t":45,"s":[-20,-20],"to":[0,0],"ti":[-6.667,0]},
                {"t":60,"s":[20,-20]}
              ],"ix":2},
              "a":{"a":0,"k":[0,0],"ix":1},
              "s":{"a":0,"k":[100,100],"ix":3},
              "r":{"a":1,"k":[
                {"i":{"x":[0.1],"y":[1]},"o":{"x":[0.9],"y":[0]},"t":0,"s":[-45]},
                {"i":{"x":[0.1],"y":[1]},"o":{"x":[0.9],"y":[0]},"t":15,"s":[45]},
                {"i":{"x":[0.1],"y":[1]},"o":{"x":[0.9],"y":[0]},"t":30,"s":[-45]},
                {"i":{"x":[0.1],"y":[1]},"o":{"x":[0.9],"y":[0]},"t":45,"s":[45]},
                {"t":60,"s":[-45]}
              ],"ix":6},
              "o":{"a":0,"k":100,"ix":7},
              "sk":{"a":0,"k":0,"ix":4},
              "sa":{"a":0,"k":0,"ix":5},
              "nm":"Transform"
            }
          ],
          "nm":"Right Arm",
          "np":2,
          "cix":2,
          "bm":0,
          "ix":4,
          "mn":"ADBE Vector Group",
          "hd":false
        },
        {
          "ty":"gr",
          "it":[
            {
              "ty":"rc",
              "d":1,
              "s":{"a":0,"k":[5,50],"ix":2},
              "p":{"a":0,"k":[0,0],"ix":3},
              "r":{"a":0,"k":0,"ix":4},
              "nm":"Leg",
              "mn":"ADBE Vector Shape - Rect",
              "hd":false
            },
            {
              "ty":"st",
              "c":{"a":0,"k":[0.39,0.42,1,1],"ix":3},
              "o":{"a":0,"k":100,"ix":4},
              "w":{"a":0,"k":5,"ix":5},
              "lc":2,
              "lj":1,
              "ml":4,
              "bm":0,
              "nm":"Stroke",
              "mn":"ADBE Vector Graphic - Stroke",
              "hd":false
            },
            {
              "ty":"tr",
              "p":{"a":0,"k":[-10,15],"ix":2},
              "a":{"a":0,"k":[0,0],"ix":1},
              "s":{"a":0,"k":[100,100],"ix":3},
              "r":{"a":1,"k":[
                {"i":{"x":[0.1],"y":[1]},"o":{"x":[0.9],"y":[0]},"t":0,"s":[-30]},
                {"i":{"x":[0.1],"y":[1]},"o":{"x":[0.9],"y":[0]},"t":15,"s":[30]},
                {"i":{"x":[0.1],"y":[1]},"o":{"x":[0.9],"y":[0]},"t":30,"s":[-30]},
                {"i":{"x":[0.1],"y":[1]},"o":{"x":[0.9],"y":[0]},"t":45,"s":[30]},
                {"t":60,"s":[-30]}
              ],"ix":6},
              "o":{"a":0,"k":100,"ix":7},
              "sk":{"a":0,"k":0,"ix":4},
              "sa":{"a":0,"k":0,"ix":5},
              "nm":"Transform"
            }
          ],
          "nm":"Left Leg",
          "np":2,
          "cix":2,
          "bm":0,
          "ix":5,
          "mn":"ADBE Vector Group",
          "hd":false
        },
        {
          "ty":"gr",
          "it":[
            {
              "ty":"rc",
              "d":1,
              "s":{"a":0,"k":[5,50],"ix":2},
              "p":{"a":0,"k":[0,0],"ix":3},
              "r":{"a":0,"k":0,"ix":4},
              "nm":"Leg",
              "mn":"ADBE Vector Shape - Rect",
              "hd":false
            },
            {
              "ty":"st",
              "c":{"a":0,"k":[0.39,0.42,1,1],"ix":3},
              "o":{"a":0,"k":100,"ix":4},
              "w":{"a":0,"k":5,"ix":5},
              "lc":2,
              "lj":1,
              "ml":4,
              "bm":0,
              "nm":"Stroke",
              "mn":"ADBE Vector Graphic - Stroke",
              "hd":false
            },
            {
              "ty":"tr",
              "p":{"a":0,"k":[10,15],"ix":2},
              "a":{"a":0,"k":[0,0],"ix":1},
              "s":{"a":0,"k":[100,100],"ix":3},
              "r":{"a":1,"k":[
                {"i":{"x":[0.1],"y":[1]},"o":{"x":[0.9],"y":[0]},"t":0,"s":[30]},
                {"i":{"x":[0.1],"y":[1]},"o":{"x":[0.9],"y":[0]},"t":15,"s":[-30]},
                {"i":{"x":[0.1],"y":[1]},"o":{"x":[0.9],"y":[0]},"t":30,"s":[30]},
                {"i":{"x":[0.1],"y":[1]},"o":{"x":[0.9],"y":[0]},"t":45,"s":[-30]},
                {"t":60,"s":[30]}
              ],"ix":6},
              "o":{"a":0,"k":100,"ix":7},
              "sk":{"a":0,"k":0,"ix":4},
              "sa":{"a":0,"k":0,"ix":5},
              "nm":"Transform"
            }
          ],
          "nm":"Right Leg",
          "np":2,
          "cix":2,
          "bm":0,
          "ix":6,
          "mn":"ADBE Vector Group",
          "hd":false
        }
      ],
      "ip":0,
      "op":60,
      "st":0,
      "bm":0
    }
  ],
  "markers":[]
};

const LottieRunningMan = () => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    fetch('https://assets4.lottiefiles.com/animation/54919c33-a6d4-4908-919f-7f824c262d69/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(animationData => {
        if (animationRef.current) {
          animationRef.current.destroy();
        }

        animationRef.current = lottie.loadAnimation({
          container: containerRef.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: animationData
        });
      })
      .catch(error => {
        console.error('Error loading animation:', error);
      });

    return () => {
      if (animationRef.current) {
        animationRef.current.destroy();
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        width: '100%', 
        height: '100%',
        background: 'transparent'
      }} 
    />
  );
};

export default LottieRunningMan;