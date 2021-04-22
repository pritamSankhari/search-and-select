/*
-----------------------------------------
	Developed By: PRITAM SANKHARI
-----------------------------------------	
*/



let getSSItemType = function(elementNode){

	let ss_class_list = elementNode.classList

	let ss_input_full_class_name = ''
	
	for(let i=0; i<ss_class_list.length;i++){

		ss_input_full_class_name +='.'+ ss_class_list[i]
	}

	return $(ss_input_full_class_name).attr('ss-item-type');
}

var initOnFocusSearchInput = function(){
	$('.ss_search_input').on('focus',function(event){
		
		
		let itemType = getSSItemType(event.target)	
		
		$('.ss_block' + '.' + itemType + ' > .ss_item_list').css({
			display:'block'
		})


		// ON MOUSE LEAVE
		$('.ss_block' + '.' + itemType).on('mouseleave',function(event){

			$('.ss_block > .ss_item_list').css({
				display:'none'
			})
		})

		// ON MOUSE ENTER
		$('.ss_block' + '.' + itemType).on('mouseenter',function(event){
			
			$('.ss_block'  + '.' + itemType + ' > .ss_item_list' + '.' + itemType).css({
				display:'block'
			})

			let itemList = document.querySelectorAll('.' + itemType + '.ss_block .ss_item' )
			let itemFound = false;

			// SEARCH OPERATION
			for(let i=0;i<itemList.length;i++){

				if(itemList[i].style.cssText.indexOf('display: block;') > -1 || itemList[i].style.cssText == '' ) itemFound = true
			
			}

			if(!itemFound){
				$('.ss_block'  + '.' + itemType + ' > .ss_item_list' + '.' + itemType).css({
					display:'none'
				})
			}
		})
		
	})	
}



// ON SEARCH INPUT
var initOnSearchInput = function(afterEachCharInput, afterDeleteAllChar){
	
	$('.ss_search_input').on('input',function(event){

		let itemType = getSSItemType(event.target)
		let value = $('.ss_search_input' + '.' + itemType).val()

		let itemList = document.querySelectorAll('.' + itemType + '.ss_block .ss_item' )


		

		let itemValue = '-1';
		let itemFound = false;
		let i;

		if(value == ''){
			$('.ss_selected_item' + '.' + itemType).val('0') 

			if(afterDeleteAllChar != null){
				afterDeleteAllChar()
			}
			return	
		} 

		// SEARCH OPERATION
		for(i=0;i<itemList.length;i++){


			if( itemList[i].textContent.trim().indexOf(value) == -1){
				itemList[i].style.display='none'

			}

			else{
				itemList[i].style.display='block'

				itemFound = true
				
				if(itemList[i].textContent.trim() == value){

					itemValue = itemList[i].attributes['item-value'].value
				} 

				else itemValue = '-1'	
			}

			
		}

		if( i == itemList.length && itemFound == false){
			$('.ss_block'  + '.' + itemType + ' > .ss_item_list' + '.' + itemType).css({
				display:'none'
			})
		}

		else{

			$('.ss_block'  + '.' + itemType + ' > .ss_item_list' + '.' + itemType).css({
				display:'block'
			})
		}
		
		$('.ss_selected_item' + '.' + itemType).val(itemValue.trim())

		if(afterEachCharInput != null){
			afterEachCharInput()
		}
	})	

	
}

var initOnOptionSelect = function(afterOptionSelect){
	
	$('.ss_item').on('click',function(event){

		let itemType = event.target.parentElement.attributes['ss-item-type'].value
		let itemValue = event.target.attributes['item-value'].value
		let itemName = event.target.textContent
		
		$('.ss_search_input' + '.' + itemType).val(itemName.trim())
		$('.ss_selected_item' + '.' + itemType).val(itemValue.trim())

		$('.ss_block'  + '.' + itemType + ' > .ss_item_list' + '.' + itemType).css({
			display:'none'
		})	
		
		if(afterOptionSelect != null){
			afterOptionSelect()
		}
	})

}


// initOnFocusSearchInput()

// initOnSearchInput()

// initOnOptionSelect()