var d3 = require('d3');
var count = 0;
var colors = ['white', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'black'];

module.exports = function() {
  var div = document.createElement('div');
  /* D3 Tree */
  /* Copyright 2013 Peter Cook (@prcweb); Licensed MIT */

  // Tree configuration
  var branches = [];
  var seed = {i: 0, x: 420, y: 600, a: 0, l: 130, d:0}; // a = angle, l = length, d = depth
  var da = 0.4; // Angle delta
  var dl = 0.80; // Length delta (factor)
  var ar = 0.75; // Randomness
  var maxDepth = 8;


  // Tree creation functions
  function branch(b) {
    var end = endPt(b), daR, newB;

    branches.push(b);

    if (b.d === maxDepth)
      return;

    // Left branch
    daR = ar * Math.random() - ar * 0.5;
    newB = {
      i: branches.length,
      x: end.x,
      y: end.y,
      a: b.a - da + daR,
      l: b.l * dl,
      d: b.d + 1,
      parent: b.i
    };
    branch(newB);

    // Right branch
    daR = ar * Math.random() - ar * 0.5;
    newB = {
      i: branches.length,
      x: end.x,
      y: end.y,
      a: b.a + da + daR,
      l: b.l * dl,
      d: b.d + 1,
      parent: b.i
    };
    branch(newB);
  }

  branch(seed);

  function endPt(b) {
    // Return endpoint of branch
    var x = b.x + b.l * Math.sin( b.a );
    var y = b.y - b.l * Math.cos( b.a );
    return {x: x, y: y};
  }


  // D3 functions
  function x1(d) {return d.x;}
  function y1(d) {return d.y;}
  function x2(d) {return endPt(d).x;}
  function y2(d) {return endPt(d).y;}
  function highlightParents(d) {
    var colour = d3.event.type === 'mouseover' ? 'green' : 'white';
    var depth = d.d;
    for(var i = 0; i <= depth; i++) {
      d3.select('#id-'+parseInt(d.i)).style('stroke', colour);
      d = branches[d.parent];
    }
  }

    function pickColor() {
      count > 6 ? count = -1 : count = count;
      count++;
      return colors[count];
    }

    var thisColor = pickColor();

  d3.select(div)
    .append('svg')
    .attr("width", 800)
    .attr("height", 700)
    .style('margin-left', 60)
    .style('margin-top', 10)
    .selectAll('line')
    .data(branches)
    .enter()
    .append('line')
    .attr('stroke', thisColor)
    .attr('x1', x1)
    .attr('y1', y1)
    .attr('x2', x2)
    .attr('y2', y2)
    .style('stroke-width', function(d) {return parseInt(maxDepth + 1 - d.d) + 'px';})
    .attr('id', function(d) {return 'id-'+d.i;})

  return div;
}
