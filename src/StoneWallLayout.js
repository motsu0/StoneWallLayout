let StoneWall = function(class_name,prop){
  prop = prop || {};
  const target = class_name || 'stone_wall';
  const sw_boxs = document.getElementsByClassName(target);
  const columns = prop.columns || 3;
  const order = prop.order || 'left';

  Array.prototype.forEach.call(sw_boxs,function(sw_box){
    for(let i=0;i<columns;i++){
      let sw_column = document.createElement('div');
      sw_column.setAttribute('class', target + '_column');
      sw_column.style.width = 'calc(100%/' + columns + ')';
      sw_box.insertBefore(sw_column, sw_box.firstChild);
    }
    let sw_columns = sw_box.getElementsByClassName(target + '_column')
    let sw_children = sw_box.getElementsByClassName(target + '_child');
    let now_column = 0;
    let num_contents = sw_children.length;
    let now_height;

    switch(order){
      case 'left':
        Array.prototype.forEach.call(sw_children,function(sw_child){
          sw_columns[now_column].appendChild(sw_child);
          (now_column>=columns-1)?now_column=0:now_column++;
        });
        break;
      case 'top':
        now_height = new Array(columns);
        for(let i=0;i<now_height.length;i++){now_height[i] = 0;}
        Array.prototype.forEach.call(sw_children,function(sw_child){
          let column_num = index_min(now_height);
          sw_columns[column_num].appendChild(sw_child);
          now_height[column_num] = sw_columns[column_num].clientHeight;
        });
        break;
      case 'level':
        let height_map =[];
        for(let i=0;i<num_contents;i++){
          height_map[i] = {};
          height_map[i].id = i;
          height_map[i].el = sw_children[i];
          height_map[i].height = sw_children[i].clientHeight;
        }
        height_map.sort(function(a,b){
          return b.height - a.height;
        });

        now_height = new Array(columns);
        for(let i=0;i<now_height.length;i++){now_height[i] = 0;}
        for(let i=0;i<num_contents;i++){
          let column_num = index_min(now_height);
          now_height[column_num] += height_map[i].height;
          height_map[i].column = column_num;
        }
        height_map.sort(function(a,b){
          return a.id - b.id;
        });
        for(let i=0;i<num_contents;i++){
          sw_columns[height_map[i].column].appendChild(height_map[i].el);
        }
        break;
      default:
        break;
    }
  });

  function index_min(arr){
    if(Array.isArray(arr)){
      let min = arr[0];
      arr.forEach(function(val){
        if(val<min){min=val};
      });
      return arr.indexOf(min);
    }else{
      return undefined;
    }
  }
}