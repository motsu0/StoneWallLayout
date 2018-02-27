# StoneWallLayout
this plug-in lines up element from above in multiple columns

## Usage
### 1.Include Files
Include CSS in your `<head></head>`.
```
<link rel="stylesheet" href="path/to/StoneWallLayout.min.css">
```

Include Script and HTML right before `</body>`
```
<script src="path/to/StoneWallLayout.min.js"></script>
```
### 2.Add HTML For StoneWallLayout
Example
```
<div class="stone_wall">
  <img class="stone_wall_child" src="path/to/img1.jpg" alt="img1">
  <img class="stone_wall_child" src="path/to/img2.jpg" alt="img2">
  <img class="stone_wall_child" src="path/to/img3.jpg" alt="img3">
  <div class="stone_wall_child">content1</div>
  <div class="stone_wall_child">content2</div>
  <div class="stone_wall_child">content3</div>
</div>
```
### 3.Fire Plugin
#### Default
```
window.addEventListener('load',function(){
  var stonewall = new StoneWall();
},false);
```
#### Fill from the top, and change the number of columns
```
window.addEventListener('load',function(){
  var stonewall = new StoneWall('stone_wall',{
    order: 'top',
    columns:5
  });
},false);
```
#### Another way ( When you use jQuery )
```
$(document).ready(function(){
  var stonewall = new StoneWall('stone_wall',{
    order: 'top',
    columns:5
  });
});
```
### ※ Edit HTML and CSS File ( If Necessary )
When you change class name "stone_wall" to "example", you must change others as below.
#### HTML
```
<div class="example">
  <img class="example_child" src="path/to/img1.jpg" alt="img1">
  <img class="example_child" src="path/to/img2.jpg" alt="img2">
  <img class="example_child" src="path/to/img3.jpg" alt="img3">
  <div class="example_child">content1</div>
  <div class="example_child">content2</div>
  <div class="example_child">content3</div>
</div>
```
#### CSS
```
.example_column{
  box-sizing: border-box;
  padding: 5px;
  display: inline-block;
  vertical-align: top;
}
.example_child{
  width: 100%;
  display: block;
}
.example_child + .example_child{
  margin-top: 10px;
}
```
#### Script
```
window.addEventListener('load',function(){
  var stonewall = new StoneWall('example',{
    order: 'top',
    columns:5
  });
},false);
```
## DEMO([DEMO PAGE](https://mo2nabe.com/?p=358))
![sw1](https://user-images.githubusercontent.com/32638970/36716085-61af2970-1bdc-11e8-93a6-7783c5d48a3e.PNG)
![sw2](https://user-images.githubusercontent.com/32638970/36716086-61dbb7c4-1bdc-11e8-91ba-db50bb76e5d3.PNG)
![sw](https://user-images.githubusercontent.com/32638970/36716084-6181b4fe-1bdc-11e8-8f2a-3def9bd2509c.PNG)
