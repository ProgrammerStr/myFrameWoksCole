// E S T R U T U R A  - J A V A S C R I P T ( E N C A P S U L A D A )

// funcao recebe os paramentos:
// $ seletor jquery
// window
// document
// myVar - Variavel do tipo objeto que contem as mipulações do DOM

// 'use strict' - para uso rigoroso do javacript
// init - inicia as funções separadas

// C O D E  B Y - G A B R I E L  P A D U A  |T H & - C # D E - S T R @ N G E|

// V A R I A V E L  P R I N C I P A L
var Sapp = {};

// M O D U L O  E N C A P S U L A D O 
var module01 = (function($, win, doc, Sapp){

			'use strict';

			Sapp = {

				 string  : 'teste 1',

			};

			Sapp.init = function() {

				// I N I C I A  O  E V E N T O  P Ó S  - C A R R E G A M E N T 0
			  Sapp.listen();

			};

			Sapp.listen = function(){

			};


			$(doc).ready(function(){

				Sapp.init();

			});


}(jQuery, window, document, 'Private'));
