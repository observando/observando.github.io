		<!--//--><![CDATA[//><!--
			var images = new Array()
			function preload() {
				for (i = 0; i < preload.arguments.length; i++) {
					images[i] = new Image()
					images[i].src = preload.arguments[i]
				}
			}
			preload(
                "https://observando.net/media/All/Observando-5.png",
                "https://observando.net/media/All/Observando-6.png",
                "https://observando.net/media/All/Observando-7.png",
                "https://observando.net/media/All/Observando-8.png",
                "https://observando.net/media/All/Observando-9.png",
                "https://observando.net/media/All/Observando-10.png",
                "https://observando.net/media/All/Observando-11.png"				
			)
		//--><!]]>