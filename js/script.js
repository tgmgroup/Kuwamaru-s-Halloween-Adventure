/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({
	universe: 
	{
	  "autoPlay": true,
	  "background": {
		"color": {
		  "value": "transparent"
		},
		"image": "",
		"position": "",
		"repeat": "",
		"size": "",
		"opacity": 1
	  },
	  "backgroundMask": {
		"composite": "destination-out",
		"cover": {
		  "color": {
			"value": "#fff"
		  },
		  "opacity": 1
		},
		"enable": false
	  },
	  "clear": true,
	  "defaultThemes": {},
	  "delay": 0,
	  "fullScreen": {
		"enable": true,
		"zIndex": 0
	  },
	  "detectRetina": true,
	  "duration": 0,
	  "fpsLimit": 120,
	  "interactivity": {
		"detectsOn": "window",
		"events": {
		  "onClick": {
			"enable": true,
			"mode": "push"
		  },
		  "onDiv": {
			"selectors": [],
			"enable": false,
			"mode": [],
			"type": "circle"
		  },
		  "onHover": {
			"enable": true,
			"mode": "repulse",
			"parallax": {
			  "enable": false,
			  "force": 2,
			  "smooth": 10
			}
		  },
		  "resize": {
			"delay": 0.5,
			"enable": true
		  }
		},
		"modes": {
		  "trail": {
			"delay": 1,
			"pauseOnStop": false,
			"quantity": 1
		  },
		  "attract": {
			"distance": 200,
			"duration": 0.4,
			"easing": "ease-out-quad",
			"factor": 1,
			"maxSpeed": 50,
			"speed": 1
		  },
		  "bounce": {
			"distance": 200
		  },
		  "bubble": {
			"distance": 200,
			"duration": 0.4,
			"mix": false,
			"divs": {
			  "distance": 200,
			  "duration": 0.4,
			  "mix": false,
			  "selectors": []
			}
		  },
		  "connect": {
			"distance": 80,
			"links": {
			  "opacity": 0.5
			},
			"radius": 60
		  },
		  "grab": {
			"distance": 100,
			"links": {
			  "blink": false,
			  "consent": false,
			  "opacity": 1
			}
		  },
		  "push": {
			"default": true,
			"groups": [],
			"quantity": 4
		  },
		  "remove": {
			"quantity": 2
		  },
		  "repulse": {
			"distance": 200,
			"duration": 0.4,
			"factor": 100,
			"speed": 1,
			"maxSpeed": 50,
			"easing": "ease-out-quad",
			"divs": {
			  "distance": 200,
			  "duration": 0.4,
			  "factor": 100,
			  "speed": 1,
			  "maxSpeed": 50,
			  "easing": "ease-out-quad",
			  "selectors": []
			}
		  },
		  "slow": {
			"factor": 3,
			"radius": 200
		  },
		  "light": {
			"area": {
			  "gradient": {
				"start": {
				  "value": "#ffffff"
				},
				"stop": {
				  "value": "#000000"
				}
			  },
			  "radius": 1000
			},
			"shadow": {
			  "color": {
				"value": "#000000"
			  },
			  "length": 2000
			}
		  }
		}
	  },
	  "manualParticles": [],
	  "particles": {
		"bounce": {
		  "horizontal": {
			"value": 1
		  },
		  "vertical": {
			"value": 1
		  }
		},
		"collisions": {
		  "absorb": {
			"speed": 2
		  },
		  "bounce": {
			"horizontal": {
			  "value": 1
			},
			"vertical": {
			  "value": 1
			}
		  },
		  "enable": false,
		  "maxSpeed": 10,
		  "mode": "bounce",
		  "overlap": {
			"enable": true,
			"retries": 0
		  }
		},
		"color": {
		  "value": "#ff0000",
		  "animation": {
			"h": {
			  "count": 0,
			  "enable": true,
			  "speed": 20,
			  "decay": 0,
			  "delay": 0,
			  "sync": true,
			  "offset": 0
			},
			"s": {
			  "count": 0,
			  "enable": false,
			  "speed": 1,
			  "decay": 0,
			  "delay": 0,
			  "sync": true,
			  "offset": 0
			},
			"l": {
			  "count": 0,
			  "enable": false,
			  "speed": 1,
			  "decay": 0,
			  "delay": 0,
			  "sync": true,
			  "offset": 0
			}
		  }
		},
		"effect": {
		  "close": true,
		  "fill": true,
		  "options": {},
		  "type": []
		},
		"groups": {},
		"move": {
		  "angle": {
			"offset": 0,
			"value": 90
		  },
		  "attract": {
			"distance": 200,
			"enable": false,
			"rotate": {
			  "x": 3000,
			  "y": 3000
			}
		  },
		  "center": {
			"x": 50,
			"y": 50,
			"mode": "percent",
			"radius": 0
		  },
		  "decay": 0,
		  "distance": {},
		  "direction": "none",
		  "drift": 0,
		  "enable": true,
		  "gravity": {
			"acceleration": 9.81,
			"enable": false,
			"inverse": false,
			"maxSpeed": 50
		  },
		  "path": {
			"clamp": true,
			"delay": {
			  "value": 0
			},
			"enable": false,
			"options": {}
		  },
		  "outModes": {
			"default": "out",
			"bottom": "out",
			"left": "out",
			"right": "out",
			"top": "out"
		  },
		  "random": false,
		  "size": false,
		  "speed": 1,
		  "spin": {
			"acceleration": 0,
			"enable": false
		  },
		  "straight": false,
		  "trail": {
			"enable": false,
			"length": 10,
			"fill": {}
		  },
		  "vibrate": false,
		  "warp": false
		},
		"number": {
		  "density": {
			"enable": true,
			"width": 1920,
			"height": 1080
		  },
		  "limit": {
			"mode": "delete",
			"value": 0
		  },
		  "value": 80
		},
		"opacity": {
		  "value": 0.5,
		  "animation": {
			"count": 0,
			"enable": false,
			"speed": 2,
			"decay": 0,
			"delay": 0,
			"sync": false,
			"mode": "auto",
			"startValue": "random",
			"destroy": "none"
		  }
		},
		"reduceDuplicates": false,
		"shadow": {
		  "blur": 0,
		  "color": {
			"value": "#000"
		  },
		  "enable": false,
		  "offset": {
			"x": 0,
			"y": 0
		  }
		},
		"shape": {
		  "close": true,
		  "fill": true,
		  "options": {},
		  "type": "circle"
		},
		"size": {
		  "value": {
			"min": 1,
			"max": 3
		  },
		  "animation": {
			"count": 0,
			"enable": false,
			"speed": 5,
			"decay": 0,
			"delay": 0,
			"sync": false,
			"mode": "auto",
			"startValue": "random",
			"destroy": "none"
		  }
		},
		"stroke": {
		  "width": 0
		},
		"zIndex": {
		  "value": 0,
		  "opacityRate": 1,
		  "sizeRate": 1,
		  "velocityRate": 1
		},
		"destroy": {
		  "bounds": {},
		  "mode": "none",
		  "split": {
			"count": 1,
			"factor": {
			  "value": 3
			},
			"rate": {
			  "value": {
				"min": 4,
				"max": 9
			  }
			},
			"sizeOffset": true,
			"particles": {}
		  }
		},
		"roll": {
		  "darken": {
			"enable": false,
			"value": 0
		  },
		  "enable": false,
		  "enlighten": {
			"enable": false,
			"value": 0
		  },
		  "mode": "vertical",
		  "speed": 25
		},
		"tilt": {
		  "value": 0,
		  "animation": {
			"enable": false,
			"speed": 0,
			"decay": 0,
			"sync": false
		  },
		  "direction": "clockwise",
		  "enable": false
		},
		"twinkle": {
		  "lines": {
			"enable": false,
			"frequency": 0.05,
			"opacity": 1
		  },
		  "particles": {
			"enable": false,
			"frequency": 0.05,
			"opacity": 1
		  }
		},
		"wobble": {
		  "distance": 5,
		  "enable": false,
		  "speed": {
			"angle": 50,
			"move": 10
		  }
		},
		"life": {
		  "count": 0,
		  "delay": {
			"value": 0,
			"sync": false
		  },
		  "duration": {
			"value": 0,
			"sync": false
		  }
		},
		"rotate": {
		  "value": 0,
		  "animation": {
			"enable": false,
			"speed": 0,
			"decay": 0,
			"sync": false
		  },
		  "direction": "clockwise",
		  "path": false
		},
		"orbit": {
		  "animation": {
			"count": 0,
			"enable": false,
			"speed": 1,
			"decay": 0,
			"delay": 0,
			"sync": false
		  },
		  "enable": false,
		  "opacity": 1,
		  "rotation": {
			"value": 45
		  },
		  "width": 1
		},
		"links": {
		  "blink": false,
		  "color": {
			"value": "#ffffff"
		  },
		  "consent": false,
		  "distance": 150,
		  "enable": false,
		  "frequency": 1,
		  "opacity": 0.4,
		  "shadow": {
			"blur": 5,
			"color": {
			  "value": "#000"
			},
			"enable": false
		  },
		  "triangles": {
			"enable": false,
			"frequency": 1
		  },
		  "width": 1,
		  "warp": false
		},
		"repulse": {
		  "value": 0,
		  "enabled": false,
		  "distance": 1,
		  "duration": 1,
		  "factor": 1,
		  "speed": 1
		}
	  },
	  "pauseOnBlur": true,
	  "pauseOnOutsideViewport": true,
	  "responsive": [],
	  "smooth": false,
	  "style": {},
	  "themes": [],
	  "zLayers": 100,
	  "name": "Basic",
	  "motion": {
		"disable": false,
		"reduce": {
		  "factor": 4,
		  "value": true
		}
	  }
	}	
});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {
	'Artists': {
		'Backgrounds': '<a href="https://queenbeebee.carrd.co/" target="_blank">George Liu</a>',
		'Sprites': '<a href="https://queenbeebee.carrd.co/" target="_blank">Queen BeeBee</a>'
	},
	'Audio': {
		'Music': `<span xmlns:cc='http://creativecommons.org/ns#' about='urn:sha1:IJ6UMFRNC6G7KCRWZJWZYCPR5Y2XIXCG'>
				<a rel='cc:attributionURL' property='cc:attributionName' href='http://ccmixter.org/files/_ghost/25389'  target='_blank'>Pixabay</a> /
				<a rel='license' href='http://creativecommons.org/licenses/by/3.0/'  target='_blank'>CC BY 3.0</a>
			</span>`
	}
});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {
	'mainTheme': 'ambient-piano-peaceful-and-relaxing-music-237007.mp3'
});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {
	'monsterRoar': 'scary-monster-roar-2-6256.mp3'
});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});


// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	// Start    
	'visitor-center-entrance': 'start-visitorcenter.JPG',
    'visitor-center-nick': 'start-nick.JPG',

    // Visitor Center
    'visitor-center-silkworms': 'welcome1-silkworms.JPG',
    'visitor-center-silkworms-closeup': 'welcome1-silkwormcloseup.JPG',
    'visitor-center-video': 'welcome2-video.JPG',
    'visitor-center-video-nick': 'welcome2-videowithnick.JPG',
    'visitor-center-video-kuwamaru': 'welcome2-videokuwamaru.JPG',
    'visitor-center-video-tajima': 'welcome2-videomistertajima.JPG',
    'visitor-center-exhibithouse': 'welcome2-exhibithouse.JPG',
    'visitor-center-exhibitbook': 'welcome2-exhibitbook.JPG',
    'visitor-center-exhibitmicroscope': 'welcome2-exhibitmicroscope.JPG',
    'visitor-center-exhibitshibusawa': 'welcome2-exhibitshibusawa.JPG',
    'visitor-center-oldvisitorcenter': 'welcome2-oldvisitorcenter.JPG',

    // Path to Tajima House
    'path1a-backgate': 'path1a-backgate.JPG',
    'path1b-signboard': 'path1a-signboard.JPG',
    'path1c-acrosstheroad': 'path1a-acrosstheroad.JPG',
    'path1d-mulberries': 'path1a-mulberries.JPG',

    // Tajima Residence
    'tajima1-maingate': 'tajima1-maingate.JPG',
    'tajima1-everyonetogether': 'tajima1-everyonetogether.JPG',
    'tajima1-houseandgarden': 'tajima1-houseandgarden.JPG',
    'tajima1-museumandbuildings': 'tajima1-museumandbuildings.JPG',
    'tajima1-parismedals': 'tajima1-parismedals.JPG',
    'tajima1-museum1': 'tajima1-museum1.JPG',
    'tajima1-museum2': 'tajima1-museum2.JPG',
    'tajima1-museum3': 'tajima1-museum3.JPG',
    'tajima1-coldstorage': 'tajima1-coldstorage.JPG',
    'tajima1-workbuilding': 'tajima1-workbuilding.JPG',
    'tajima1-workbuildingbathroom': 'tajima1-workbuildingbathroom.JPG',
    'tajima1-backgate': 'tajima1-backgate.JPG',

    'tajima2-outside': 'tajima2-outside.JPG',
    'tajima2-buheihouse': 'tajima2-buheihouse.JPG',
    'tajima2-relatives': 'tajima2-relatives.JPG',
    'tajima2-backside': 'tajima2-backside.JPG',

    'tajima1-backgate': 'tajima1-backgate.JPG',
    

    // Path back to Visitor Center

    // Meet up at Visitor Center
    'welcome-end': 'welcome-end.JPG'

});


// Define the Characters
monogatari.characters ({
'p': {
		name: '{{player.name}}',
		color: '#ff3951',
		directory: 'Player',
		sprites: {
			normal: 'player (1).jpg',
			handsonhips: 'player (2).jpg'

		},
		expressions: {
			normal: 'player (1).jpg',
			handsonhips: 'player (2).jpg'

		},
	},
	'k': {
		name: 'Kuwamaru',
		color: '#5bcaff',
		directory: 'Kuwamaru',
		sprites: {
			normal: 'tatii.png',

		},
		expressions: {
			normal: 'tatii.png',

		},
	},
	'n': {
		name: 'Nick',
		color: '#5bcaff',
		directory: 'Nick',
		sprites: {
			normal: 'nick-normal.jpg',

		},
		expressions: {
			normal: 'nick-normal.jpg',

		},
	},
	'z1': {
		name: 'Zombie',
		color: '#5bcaff',
		directory: 'Zombies',
		sprites: {
			normal: '1.jpg',

		},
		expressions: {
			normal: '1.jpg',

		},
	},
	'z2': {
		name: 'Zombie',
		color: '#5bcaff',
		directory: 'Zombies',
		sprites: {
			normal: '2.jpg',

		},
		expressions: {
			normal: '2.jpg',

		},
	},
	'z3': {
		name: 'Zombie',
		color: '#5bcaff',
		directory: 'Zombies',
		sprites: {
			normal: '3.jpg',

		},
		expressions: {
			normal: '3.jpg',

		},
	},
	'z4': {
		name: 'Zombie',
		color: '#5bcaff',
		directory: 'Zombies',
		sprites: {
			normal: '4.jpg',

		},
		expressions: {
			normal: '4.jpg',

		},
	}
});

monogatari.script ({
	// The game starts here.
	'Start': [
					'clear',
			'show scene black with fadeIn',
		//'show scene #f7f6f6 with fadeIn',
		'show particles universe',
		'show scene visitor-center-entrance with fadeIn',
		//'show notification Welcome',
		'play music mainTheme with volume 20 fade 2 loop',
		{
			'Input': {
				'Text': 'What is your name?',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'You must enter a name!'
			}
		},


		//'centered Welcome to Kuwamaru\'s Halloween Adventure',

		'hide particles',

		'k:normal Hi {{player.name}}! Welcome to our adventure!',
		'p:normal Hi, Kuwamaru!',
		'k:normal Today we are going to the Tajima Yahei Sericulture Farm.',
		'k:normal We are at the Visitor Center now.',
		'k:normal Let\'s go meet up with Nick.',


		'show scene visitor-center-entrance with fadeIn',
		{
			'Choice': {

				//'Dialog': 'centered Do you know Nick? <br><br><br><br><br><br><br><br><br><br>',
				'Dialog': 'k:normal Do you know Nick? ',
				
				'Yes': {
					'Text': 'Yes, let\'s say hello to Nick.',
					'Do': 'jump Start-Hello-Nick-Yes'
				},
				'No': {
					'Text': 'No, who is Nick?',
					'Do': 'jump Start-Hello-Nick-No'
				}
			}
		}
	],

	'Start-Hello-Nick-Yes': [
		'show scene visitor-center-nick with fadeIn',
		'p:normal Hi, Nick!',
		'n:normal Hello, {{player.name}}!',
		'n:normal It\'s good to see you again!',
		'n:normal Let\'s get going on our adventure today!',
		'jump Welcome-Center-1'
	],
	
	'Start-Hello-Nick-No': [
		'show scene visitor-center-entrance with fadeIn',
		'p:normal Ummm... ',
		'show scene visitor-center-nick with fadeIn',
		'n:normal Hello, {{player.name}}!',
		'k:normal Nick is a teacher at Goshi Elementary and Sakai Nishi Junior High.',
		'n:normal It\'s a pleasure to meet you!',
		'p:normal Oh, nice to meet you, too, Nick!',
		'jump Welcome-Center-1'
	],

	// Foreshadow Monsters

	'Welcome-Center-1': [
		'show scene visitor-center-nick with fadeIn',
		'n:normal So this is the entrance to the visitor center.',
		'k:normal Let\'s go in.',
		'stop music mainTheme with fade 2',
		'show scene visitor-center-nick with shake 1s',
		'play sound monsterRoar with volume 30',
		'k:normal !! What was that?!',
		'play music mainTheme with volume 20 fade 2 loop',
		'show scene visitor-center-nick with fadeIn',

		'k:normal !! What was that?!',
		'p:normal I don\'t know.',
		'n:normal Was it a dog?',
		'k:normal Maybe. I guess it\s OK.',
		'k:normal So... let\s go in.',
		'p:normal OK. After you!',
		
		'jump Welcome-Center-2-Silkworms',
	],

	
	// Going inside the visitor center

	'Welcome-Center-2-Silkworms': [

		// Introduce silkworms
		'show scene visitor-center-silkworms with fadeIn',
		'k:normal These are silkworms.',
		'k:normal Silkworms are caterpillars.',
		'n:normal Just like the Hungry, Hungry Caterpillar!',
		'k:normal Yes... but we can use the thread from silkworm cocoons to make silk.',

		// Show silkworms close up
		'show scene visitor-center-silkworms-closeup with fadeIn',
		'k:normal Here they are! Aren\'t they cute?',
		'p:normal Ummm... sure.',
		'n:normal Yes, of course.',
	
		{
			'Choice': {

				//'Dialog': 'centered Do you know Nick? <br><br><br><br><br><br><br><br><br><br>',
				'Dialog': 'k:normal Oh! Let\'s go this way! We can see a video about the Tajima Yahei Sericulture Farm.',
				
				'Yes': {
					'Text': 'Sure, let\'s go watch the video.',
					'Do': 'jump Welcome-Center-2-Video'
				},
				'No': {
					'Text': 'Umm, let\'s look around some more.',
					'Do': 'jump Welcome-Center-2-Exhibits'
				}
			}
		}
	],

	
	
	// Going inside the visitor center

	'Welcome-Center-2-Video': [
	],

	
	
	// Going inside the visitor center

	'Welcome-Center-2-Exhibits': [


        'show scene visitor-center-video with fadeIn',
        'show scene visitor-center-video-nick with fadeIn',
        'show scene visitor-center-video-kuwamaru with fadeIn',
        'show scene visitor-center-video-tajima with fadeIn',
        'show scene visitor-center-exhibithouse with fadeIn',
        'show scene visitor-center-exhibitbook with fadeIn',
        'show scene visitor-center-exhibitmicroscope with fadeIn',
        'show scene visitor-center-exhibitshibusawa with fadeIn',
        'show scene visitor-center-oldvisitorcenter with fadeIn',

        // Path to Tajima House
        'show scene path1a-backgate with fadeIn',
        'show scene path1b-signboard with fadeIn',
        'show scene path1c-acrosstheroad with fadeIn',
        'show scene path1d-mulberries with fadeIn',

        // Tajima Residence
        'show scene tajima1-maingate with fadeIn',
        'show scene tajima1-everyonetogether with fadeIn',
        'show scene tajima1-houseandgarden with fadeIn',
        'show scene tajima1-museumandbuildings with fadeIn',
        'show scene tajima1-parismedals with fadeIn',
        'show scene tajima1-museum1 with fadeIn',
        'show scene tajima1-museum2 with fadeIn',
        'show scene tajima1-museum3 with fadeIn',
        'show scene tajima1-coldstorage with fadeIn',
        'show scene tajima1-workbuilding with fadeIn',
        'show scene tajima1-workbuildingbathroom with fadeIn',
        'show scene tajima1-backgate with fadeIn',

        'show scene tajima2-outside with fadeIn',
        'show scene tajima2-buheihouse with fadeIn',
        'show scene tajima2-relatives with fadeIn',
        'show scene tajima2-backside with fadeIn',

        'show scene tajima1-backgate with fadeIn',
        'show scene tajima1-backgate with fadeIn',

        // Path back to Visitor Center

        // Meet up at Visitor Center
        'show scene welcome-end with fadeIn',




		

		{
			'Choice': {
				'Dialog': 'n:normal I think it was a little earthquake. Have you already read some documentation?',

				'Yes': {
					'Text': 'Yes',
					'Do': 'jump Yes'
				},
				'No': {
					'Text': 'No',
					'Do': 'jump No'
				}
			}
		}
	],

	'Yes': [
		'k Thats awesome!',
		'k Then you are ready to go ahead and create an amazing Game!',
		'k I can’t wait to see what story you’ll tell!',
		'end'
	],

	'No': [

		'Nick You can do it now.',

		'show message Help',

		'Nick Go ahead and create an amazing Game!',
		'Nick I can’t wait to see what story you’ll tell!',
		'end'
	]
});