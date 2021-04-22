# SEARCH AND SELECT #
----------------------

#### Documentaion ####
----------------------
###### HTML Structure ######

<div class="ss_block {your_custom_item_type} {other class ...}">
			
	<input ss-item-type="{your_custom_item_type}" class="ss_search_input {your_custom_item_type} {other class ...}" type="text" name="search" placeholder="Select" autocomplete="off">
	
	<input class="ss_selected_item {your_custom_item_type} {other class ...}" type="hidden" name="item">	
	
	<div ss-item-type="{your_custom_item_type}" class="ss_item_list {your_custom_item_type} {other class ...}">
		

		<div item-value=1 class="ss_item">
				Item ABC
		</div>

	</div

</div>
<script type="text/javascript">
	
	// These functions must be called ... otherwise search and select option will not work
 	initOnFocusSearchInput()
 	initOnSearchInput()
	initOnOptionSelect()
</script>