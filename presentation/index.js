import React from "react";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, Quote, Slide, Spectacle,
  TableHeaderItem, TableItem, TableRow, Table, Text
} from "../src";

import preloader from "../src/utils/preloader";

import createTheme from "../src/themes/default";

import Rd3BinaryTree from "../assets/rd3binaryTree";

import BadTree from "../assets/badBinaryTree";

import Features from "../assets/Features";
import Features2 from "../assets/Features2";

require("normalize.css");
require("../src/themes/default/index.css");

const images = {
  falseComponent: require("../assets/falseComponent.png"),
  badCode1: require("../assets/badCode1.png"),
  badCode2: require("../assets/badCode2.png"),
  badCode3: require("../assets/badCode3.png"),
  badCode4: require("../assets/badCode4.png"),
  badCode5: require("../assets/badCode5.png"),
  ourD3: require("../assets/ourD3.png"),
  ourReact: require("../assets/ourReact.png"),
  d31: require("../assets/d31.png"),
  d32: require("../assets/d32.png"),
  d33: require("../assets/d33.png"),
  intro: require("../assets/introImg.png"),
  logo: require("../assets/logo.png"),
  cutOffTree: require('../assets/cutOffTree.png'),
  d3Explanation: require('../assets/1_DiagramSlide.jpg'),
  reactExplanation: require('../assets/2_DiagramSlide.jpg'),
  rerouteD3: require('../assets/3_DiagramSlide.jpg'),
  reactD3Library: require('../assets/4_DiagramSlide.jpg'),
  rd3treeData: require('../assets/5_DiagramSlide.jpg'),
  rd3ToReact: require('../assets/6_DiagramSlide.jpg')
  cLogos: require("../assets/company_logos.jpg"),
  support: require("../assets/Supports.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "#46AAE8"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>

          <Slide transition={["slide"]} bgColor="#222">
            <div style={{position: 'absolute', top: '-400px'}}>
            <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
              React D3 Library
            </Heading>
             <Image
                src={images.logo.replace("/", "")} style={
                {
                  margin: "40px 0"
                }
                } height="450px" width="400px"/>
            <Heading size={1} fit caps>
              A codesmith Presentation
            </Heading>
            <Text bold caps textColor="tertiary">in React</Text>
            <Text textColor="tertiary" textSize="1.5em" margin="20px 0px 0px" bold>by andrew burke, danny lee, and dave loyst!</Text>
            </div>
          </Slide>

          <Slide transition={["slide"]} bgColor="rgb(34, 34, 34)">
            <Image src="https://s3.amazonaws.com/media-p.slid.es/uploads/473947/images/2571254/How-to-integrate-React-D3-The-right-way-adeveloperdiary.com-4.jpg" margin="0px auto 40px" height="293px"/>
          </Slide>

          <Slide transition={["slide"]} bgColor="tertiary">
            <Heading style={{
              position: 'absolute',
              top: -450,
              left: -300
            }} size={1} textColor="rgb(34, 34, 34)">
              React:
            </Heading>
            <Image style={
              {
                position: "absolute",
                top: -300,
                left: -300
              }
            }
            src={images.cLogos.replace("/", "")} margin="0px auto 40px" height="750px"/>
            <Heading style={{
              position: 'absolute',
              top: -450,
              left: 450
            }} size={1} textColor="rgb(34, 34, 34)">
              D3:
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
              <Image
                src={images.d3Explanation.replace("/", "")} style={
                  {
                    position: 'absolute',
                    marginLeft: -300,
                    marginTop: -275,
                    height: 1100,
                    width: 1500,
                    zIndex: -1
                  }
                }/>
              <Appear fid='1' style={
                  {
                    position: 'relative',
                    marginLeft: -300,
                    marginTop: -275,
                    height: 1100,
                    width: 1500
                  }
                }>
                <Image
                  src={images.reactExplanation.replace("/", "")} />
              </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <div style={{marginTop: -50}}>
              <Heading size={1} caps fit textColor="tertiary">
                Example of the problem
              </Heading>
            </div>
            <div style={
              {
                border: '1px solid black',
                height: '515px'
              }
            } >
              <Image src={images.cutOffTree.replace("/", "")} style={
                {
                  position: 'absolute',
                  marginLeft: '-459px',
                  height: '456px',
                  width: '300px'
                }
              }/>
              <BadTree />
            </div>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
              <Image
                src={images.d31.replace("/", "")} style={
                  {
                    border: '1px solid white',
                    position: 'absolute',
                    left: -300,
                    top: -500
                  }
                } height="700px" width="500px"/>
              <Image
                src={images.d32.replace("/", "")} style={
                  {
                    border: '1px solid white',
                    position: 'absolute',
                    left: -275,
                    top: -25
                  }
                } height="800px" width="750px"/>
              <Appear style={
                {
                  border: '1px solid white',
                  position: 'absolute',
                  top: -450,
                  left: 250
                }
              } fid='1'>
                <Image
                  src={images.badCode1.replace("/", "")} height="500px" width="1075px"/>
              </Appear>
              <Appear style={
                {
                  border: '1px solid white',
                  position: 'absolute',
                  top: -350,
                  left: 300
                }
              } fid='2'>
                <Image
                  src={images.badCode2.replace("/", "")} height="500px" width="650px"/>
              </Appear>
              <Appear style={
                {
                  border: '1px solid white',
                  position: 'absolute',
                  top: -250,
                  left: 350
                }
              } fid='3'>
                <Image
                  src={images.badCode3.replace("/", "")} height="800px" width="700px"/>
              </Appear>
              <Appear style={
                {
                  border: '1px solid white',
                  position: 'absolute',
                  top: -100,
                  left: 400
                }
              } fid='4'>
                <Image
                  src={images.badCode4.replace("/", "")} height="300px" width="1200px"/>
              </Appear>
              <Appear style={
                {
                  border: '1px solid white',
                  position: 'absolute',
                  top: 0,
                  left: 450
                }
              } fid='5'>
                <Image
                  src={images.badCode5.replace("/", "")} height="600px" width="700px"/>
              </Appear>
          </Slide>

          <Slide transition={["zoom"]} bgImage="primary">
            <div style={{marginTop: -100, marginLeft: 450}}>
              <Heading size={1} caps fit textColor="tertiary">
                Our Solution
              </Heading>
            </div>
            <Image
              src={images.reactExplanation.replace("/", "")} style={
                {
                  position: 'absolute',
                  marginLeft: -300,
                  marginTop: -240,
                  height: 1100,
                  width: 1500,
                  zIndex: -1
                }
              }/>
            <Appear fid='1' style={
                {
                  position: 'absolute',
                  marginLeft: -300,
                  marginTop: -240,
                  height: 1100,
                  width: 1500
                }
              }>
              <Image
                src={images.rerouteD3.replace("/", "")} />
            </Appear>
            <Appear fid='2' style={
                {
                  position: 'absolute',
                  marginLeft: -300,
                  marginTop: -240,
                  height: 1100,
                  width: 1500
                }
              }>
              <Image
                src={images.reactD3Library.replace("/", "")} />
            </Appear>
            <Appear fid='3' style={
                {
                  position: 'absolute',
                  marginLeft: -300,
                  marginTop: -240,
                  height: 1100,
                  width: 1500
                }
              }>
              <Image
                src={images.rd3treeData.replace("/", "")} />
            </Appear>
            <Appear fid='4' style={
                {
                  position: 'relative',
                  marginLeft: -300,
                  marginTop: -240,
                  height: 1100,
                  width: 1500
                }
              }>
              <Image
                src={images.rd3ToReact.replace("/", "")} />
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <div style={
              {
                marginLeft: '-50px',
                border: '1px solid black',
                height: '575px'
              }
            } >
              <Rd3BinaryTree />
            </div>
          </Slide>

          <Slide transition={["slide"]} bgImage="primary">
              <Image
                src={images.d31.replace("/", "")} style={
                  {
                    border: '1px solid white',
                    position: 'absolute',
                    left: -300,
                    top: -500
                  }
                } height="700px" width="500px"/>
              <Image
                src={images.d32.replace("/", "")} style={
                  {
                    border: '1px solid white',
                    position: 'absolute',
                    left: -275,
                    top: -25
                  }
                } height="800px" width="750px"/>
            <Appear style={
              {
                border: '1px solid white',
                position: 'absolute',
                left: 325,
                top: -500
              }
            }fid='1'>
              <Image
                src={images.ourD3.replace("/", "")} height="700px" width="800px"/>
            </Appear>
            <Appear style={
              {
                border: '1px solid white',
                position: 'absolute',
                left: 600,
                top: 0
              }
            } fid='2'>
              <Image
                src={images.ourReact.replace("/", "")} height="550px" width="700px"/>
            </Appear>
          </Slide>


          <Slide transition={["slide", "spin"]} bgColor="secondary" textColor="primary">
            <Features />
          </Slide>

          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Image style={
              {
                position: "absolute",
                top: -450,
                left: -320
              }
            }
            src={images.support.replace("/", "")} margin="0px auto 40px" height="1000px"/>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Codesmith by
            </Heading>
            <Image width="25%" src="http://cdn.shopify.com/s/files/1/0080/8372/products/tattly_bekka_palmer_classic_red_heart_web_design_01_grande.jpg?v=1444763442"/>
            <Heading size={.75} caps fit textColor="black">
              Andrew, Daniel, and Dave
            </Heading>
            <Heading size={.25} textColor="black">
              https://github.com/react-d3-library/react-d3-library
            </Heading>

          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}







//Other Problems
// <Slide transition={["slide"]} bgColor="primary">
//   <OtherProblems/>
//   <Image style={
//     {
//       position: "absolute",
//       top: -300,
//       left: -300
//     }
//   }
//   src={images.chart.replace("/", "")} margin="0px auto 40px" height="750px"/>
//   <Image style={
//     {
//       position: "absolute",
//       top: -300,
//       left: 650

//     }
//   }
//   src={images.falseComponent.replace("/", "")} margin="0px auto 40px" height="620px" width="640px"/>
// </Slide>
