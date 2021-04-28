# SEARCH AND SELECT #
----------------------

### Documentaion ###
----------------------
###### Include Javascript library ######

```html 
<script src="jquery.js"></script>
<script src="search_and_select.js"></script>

```

###### HTML Structure ######

```html 

<div class="ss_block {your_custom_item_type} {other class ...}">			
	
	<input ss-item-type="{your_custom_item_type}" class="ss_search_input {your_custom_item_type} {other class ...}" type="text" name="search" placeholder="Select" autocomplete="off">
	
	<input class="ss_selected_item {your_custom_item_type} {other class ...}" type="hidden" name="item">	
	
	<div ss-item-type="{your_custom_item_type}" class="ss_item_list {your_custom_item_type} {other class ...}">
		
		<div item-value=1 class="ss_item">
				Item ABC
		</div>

	</div
</div>

```

###### Add this Javascript code ######

```javascript
	
// These functions must be called ... otherwise search and select option will not work
initOnFocusSearchInput()
initOnSearchInput()
initOnOptionSelect()

// if you want to add some custom codes or functionalties to execute after input each character then call
// initOnSearchInput(function(){ 
// code ...	
// })

// if you want to add some custom codes or functionalties to execute after delete all cahracters from the input field then call
// initOnSearchInput(null,function(){ 
// code ...	
// })

// if you want to add some custom codes or functionalties to execute after select each option then call
// initOnOptionSelect(function(){ 
// code ...	
// })

```
