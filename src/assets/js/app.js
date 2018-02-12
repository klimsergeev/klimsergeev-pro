import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

$(document).ready(function() {

	// MAINPAGE W/CONTACTS SCRIPT

	var contacts_menu_open = false;

	var unfold = function() {

		contacts_menu_open = true;

		$('.group').toggleClass('hide');

		$('.bt_contacts').toggleClass('hide');

		$('.bt_behance').animate({opacity: "0", top: "+=4rem"}, 200);

		$('.bt_email').animate({opacity: "100", top: "-=4rem"}, 200);

		$('.bt_phone').animate({opacity: "100", top: "+=4rem"}, 200);

		//  .animate({param: value, param: value}, speed, function() {});

	}

	var fold = function() {

		contacts_menu_open = false;

		$('.bt_phone').animate({opacity: "0", top: "-=4rem"}, 200);
		
		$('.bt_email').animate({opacity: "0", top: "+=4rem"}, 200);

		$('.bt_behance').animate({opacity: "100", top: "-=4rem"}, 200);

		$('.bt_contacts').toggleClass('hide');

		$('.group').toggleClass('hide');

		//  .animate({param: value, param: value}, speed, function() {});

	}

	$('.bt_contacts').click( function() {	unfold();	});

	$('.bt_cancel').click( function() {	fold();	});

	// $('.bt_phone').click( function() {	fold();	});

	// $('.bt_email').click( function() {	fold();	});

	// MAINPAGE W/CONTACTS SCRIPT END

});
