/* global monogatari */

// Define the messages used in the game.
monogatari.action("message").messages({
	Help: {
		title: "Help",
		subtitle: "Some useful Links",
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`,
	},
});

// Define the notifications used in the game
monogatari.action("notification").notifications({
	Welcome: {
		title: "Welcome",
		body: "This is the Monogatari VN Engine",
		icon: "",
	},
});

// Define the Particles JS Configurations used in the game
monogatari.action("particles").particles({
	universe: {
		autoPlay: true,
		background: {
			color: {
				value: "transparent",
			},
			image: "",
			position: "",
			repeat: "",
			size: "",
			opacity: 1,
		},
		backgroundMask: {
			composite: "destination-out",
			cover: {
				color: {
					value: "#fff",
				},
				opacity: 1,
			},
			enable: false,
		},
		clear: true,
		defaultThemes: {},
		delay: 0,
		fullScreen: {
			enable: true,
			zIndex: 0,
		},
		detectRetina: true,
		duration: 0,
		fpsLimit: 120,
		interactivity: {
			detectsOn: "window",
			events: {
				onClick: {
					enable: true,
					mode: "push",
				},
				onDiv: {
					selectors: [],
					enable: false,
					mode: [],
					type: "circle",
				},
				onHover: {
					enable: true,
					mode: "repulse",
					parallax: {
						enable: false,
						force: 2,
						smooth: 10,
					},
				},
				resize: {
					delay: 0.5,
					enable: true,
				},
			},
			modes: {
				trail: {
					delay: 1,
					pauseOnStop: false,
					quantity: 1,
				},
				attract: {
					distance: 200,
					duration: 0.4,
					easing: "ease-out-quad",
					factor: 1,
					maxSpeed: 50,
					speed: 1,
				},
				bounce: {
					distance: 200,
				},
				bubble: {
					distance: 200,
					duration: 0.4,
					mix: false,
					divs: {
						distance: 200,
						duration: 0.4,
						mix: false,
						selectors: [],
					},
				},
				connect: {
					distance: 80,
					links: {
						opacity: 0.5,
					},
					radius: 60,
				},
				grab: {
					distance: 100,
					links: {
						blink: false,
						consent: false,
						opacity: 1,
					},
				},
				push: {
					default: true,
					groups: [],
					quantity: 4,
				},
				remove: {
					quantity: 2,
				},
				repulse: {
					distance: 200,
					duration: 0.4,
					factor: 100,
					speed: 1,
					maxSpeed: 50,
					easing: "ease-out-quad",
					divs: {
						distance: 200,
						duration: 0.4,
						factor: 100,
						speed: 1,
						maxSpeed: 50,
						easing: "ease-out-quad",
						selectors: [],
					},
				},
				slow: {
					factor: 3,
					radius: 200,
				},
				light: {
					area: {
						gradient: {
							start: {
								value: "#ffffff",
							},
							stop: {
								value: "#000000",
							},
						},
						radius: 1000,
					},
					shadow: {
						color: {
							value: "#000000",
						},
						length: 2000,
					},
				},
			},
		},
		manualParticles: [],
		particles: {
			bounce: {
				horizontal: {
					value: 1,
				},
				vertical: {
					value: 1,
				},
			},
			collisions: {
				absorb: {
					speed: 2,
				},
				bounce: {
					horizontal: {
						value: 1,
					},
					vertical: {
						value: 1,
					},
				},
				enable: false,
				maxSpeed: 10,
				mode: "bounce",
				overlap: {
					enable: true,
					retries: 0,
				},
			},
			color: {
				value: "#ff0000",
				animation: {
					h: {
						count: 0,
						enable: true,
						speed: 20,
						decay: 0,
						delay: 0,
						sync: true,
						offset: 0,
					},
					s: {
						count: 0,
						enable: false,
						speed: 1,
						decay: 0,
						delay: 0,
						sync: true,
						offset: 0,
					},
					l: {
						count: 0,
						enable: false,
						speed: 1,
						decay: 0,
						delay: 0,
						sync: true,
						offset: 0,
					},
				},
			},
			effect: {
				close: true,
				fill: true,
				options: {},
				type: [],
			},
			groups: {},
			move: {
				angle: {
					offset: 0,
					value: 90,
				},
				attract: {
					distance: 200,
					enable: false,
					rotate: {
						x: 3000,
						y: 3000,
					},
				},
				center: {
					x: 50,
					y: 50,
					mode: "percent",
					radius: 0,
				},
				decay: 0,
				distance: {},
				direction: "none",
				drift: 0,
				enable: true,
				gravity: {
					acceleration: 9.81,
					enable: false,
					inverse: false,
					maxSpeed: 50,
				},
				path: {
					clamp: true,
					delay: {
						value: 0,
					},
					enable: false,
					options: {},
				},
				outModes: {
					default: "out",
					bottom: "out",
					left: "out",
					right: "out",
					top: "out",
				},
				random: false,
				size: false,
				speed: 1,
				spin: {
					acceleration: 0,
					enable: false,
				},
				straight: false,
				trail: {
					enable: false,
					length: 10,
					fill: {},
				},
				vibrate: false,
				warp: false,
			},
			number: {
				density: {
					enable: true,
					width: 1920,
					height: 1080,
				},
				limit: {
					mode: "delete",
					value: 0,
				},
				value: 80,
			},
			opacity: {
				value: 0.5,
				animation: {
					count: 0,
					enable: false,
					speed: 2,
					decay: 0,
					delay: 0,
					sync: false,
					mode: "auto",
					startValue: "random",
					destroy: "none",
				},
			},
			reduceDuplicates: false,
			shadow: {
				blur: 0,
				color: {
					value: "#000",
				},
				enable: false,
				offset: {
					x: 0,
					y: 0,
				},
			},
			shape: {
				close: true,
				fill: true,
				options: {},
				type: "circle",
			},
			size: {
				value: {
					min: 1,
					max: 3,
				},
				animation: {
					count: 0,
					enable: false,
					speed: 5,
					decay: 0,
					delay: 0,
					sync: false,
					mode: "auto",
					startValue: "random",
					destroy: "none",
				},
			},
			stroke: {
				width: 0,
			},
			zIndex: {
				value: 0,
				opacityRate: 1,
				sizeRate: 1,
				velocityRate: 1,
			},
			destroy: {
				bounds: {},
				mode: "none",
				split: {
					count: 1,
					factor: {
						value: 3,
					},
					rate: {
						value: {
							min: 4,
							max: 9,
						},
					},
					sizeOffset: true,
					particles: {},
				},
			},
			roll: {
				darken: {
					enable: false,
					value: 0,
				},
				enable: false,
				enlighten: {
					enable: false,
					value: 0,
				},
				mode: "vertical",
				speed: 25,
			},
			tilt: {
				value: 0,
				animation: {
					enable: false,
					speed: 0,
					decay: 0,
					sync: false,
				},
				direction: "clockwise",
				enable: false,
			},
			twinkle: {
				lines: {
					enable: false,
					frequency: 0.05,
					opacity: 1,
				},
				particles: {
					enable: false,
					frequency: 0.05,
					opacity: 1,
				},
			},
			wobble: {
				distance: 5,
				enable: false,
				speed: {
					angle: 50,
					move: 10,
				},
			},
			life: {
				count: 0,
				delay: {
					value: 0,
					sync: false,
				},
				duration: {
					value: 0,
					sync: false,
				},
			},
			rotate: {
				value: 0,
				animation: {
					enable: false,
					speed: 0,
					decay: 0,
					sync: false,
				},
				direction: "clockwise",
				path: false,
			},
			orbit: {
				animation: {
					count: 0,
					enable: false,
					speed: 1,
					decay: 0,
					delay: 0,
					sync: false,
				},
				enable: false,
				opacity: 1,
				rotation: {
					value: 45,
				},
				width: 1,
			},
			links: {
				blink: false,
				color: {
					value: "#ffffff",
				},
				consent: false,
				distance: 150,
				enable: false,
				frequency: 1,
				opacity: 0.4,
				shadow: {
					blur: 5,
					color: {
						value: "#000",
					},
					enable: false,
				},
				triangles: {
					enable: false,
					frequency: 1,
				},
				width: 1,
				warp: false,
			},
			repulse: {
				value: 0,
				enabled: false,
				distance: 1,
				duration: 1,
				factor: 1,
				speed: 1,
			},
		},
		pauseOnBlur: true,
		pauseOnOutsideViewport: true,
		responsive: [],
		smooth: false,
		style: {},
		themes: [],
		zLayers: 100,
		name: "Basic",
		motion: {
			disable: false,
			reduce: {
				factor: 4,
				value: true,
			},
		},
	},
});

// Define the canvas objects used in the game
monogatari.action("canvas").objects({});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration("credits", {
	Artists: {
		Backgrounds:
			'<a href="https://queenbeebee.carrd.co/" target="_blank">George Liu</a>',
		Sprites:
			'<a href="https://queenbeebee.carrd.co/" target="_blank">Queen BeeBee</a>',
	},
	Audio: {
		Music: `<span xmlns:cc='http://creativecommons.org/ns#' about='urn:sha1:IJ6UMFRNC6G7KCRWZJWZYCPR5Y2XIXCG'>
				<a rel='cc:attributionURL' property='cc:attributionName' href='http://ccmixter.org/files/_ghost/25389'  target='_blank'>Pixabay</a> /
				<a rel='license' href='http://creativecommons.org/licenses/by/3.0/'  target='_blank'>CC BY 3.0</a>
			</span>`,
	},
});

// Define the images that will be available on your game's image gallery
monogatari.assets("gallery", {});

// Define the music used in the game.
monogatari.assets("music", {
	mainTheme: "ambient-piano-peaceful-and-relaxing-music-237007.mp3",
	farmTheme: "beautiful-emotional-soft-piano-259946.mp3",
	scaryTheme: "halloween-bgmgrimdark-amp-gothic-piano-247733.mp3",
	runningTheme: "scary-piano-music-36174.mp3",
	badEndingTheme: "gloomy-atmosphere-for-documentaries-195364.mp3",
	goodEndingTheme: "peaceful-piano-background-music-218762.mp3",
});

// Define the voice files used in the game.
monogatari.assets("voices", {});

// Define the sounds used in the game.
monogatari.assets("sounds", {
	monsterRoar: "scary-monster-roar-2-6256.mp3",
	learningPoint: "logo-corporate-152477.mp3",
	mulberryBush: "music_box_plays_the_mulberry_bush-92880.mp3",
});

// Define the videos used in the game.
monogatari.assets("videos", {});

// Define the images used in the game.
monogatari.assets("images", {});

// Define the backgrounds for each scene.
monogatari.assets("scenes", {
	// Start
	"visitor-center-entrance": "start-visitorcenter.JPG",
	"visitor-center-nick": "start-nick.JPG",

	// Visitor Center
	"visitor-center-silkworms": "welcome1-silkworms.JPG",
	"visitor-center-silkworms-closeup": "welcome1-silkwormcloseup.JPG",
	"visitor-center-video": "welcome2-video.JPG",
	"visitor-center-video-nick": "welcome2-videowithnick.JPG",
	"visitor-center-video-kuwamaru": "welcome2-videokuwamaru.JPG",
	"visitor-center-video-tajima": "welcome2-videomistertajima.JPG",
	"visitor-center-exhibithouse": "welcome2-exhibithouse.JPG",
	"visitor-center-exhibitbook": "welcome2-exhibitbook.JPG",
	"visitor-center-exhibitmicroscope": "welcome2-exhibitmicroscope.JPG",
	"visitor-center-exhibitshibusawa": "welcome2-exhibitshibusawa.JPG",
	"visitor-center-oldvisitorcenter": "welcome2-oldvisitorcenter.JPG",

	// Path to Tajima House
	"path1a-backgate": "path1a-backgate.JPG",
	"path1b-signboard": "path1b-signboard.JPG",
	"path1c-acrosstheroad": "path1c-acrosstheroad.JPG",
	"path1d-mulberries": "path1d-mulberries.JPG",

	// Tajima Residence
	"tajima1-maingate": "tajima1-maingate.JPG",
	"tajima1-everyonetogether": "tajima1-everyonetogether.JPG",
	"tajima1-houseandgarden": "tajima1-houseandgarden.JPG",
	"tajima1-museumandbuildings": "tajima1-museumandbuildings.JPG",
	"tajima1-parismedals": "tajima1-parismedals.JPG",
	"tajima1-museum1": "tajima1-museum1.JPG",
	"tajima1-museum2": "tajima1-museum2.JPG",
	"tajima1-museum3": "tajima1-museum3.JPG",
	"tajima1-coldstorage": "tajima1-coldstorage.JPG",
	"tajima1-workbuilding": "tajima1-workbuilding.JPG",
	"tajima1-workbuildingbathroom": "tajima1-workbuildingbathroom.JPG",
	"tajima1-backgate": "tajima1-backgate.JPG",

	"tajima2-outside": "tajima2-outside.JPG",
	"tajima2-buheihouse": "tajima2-buheihouse.JPG",
	"tajima2-relatives": "tajima2-relatives.JPG",
	"tajima2-backside": "tajima2-backside.JPG",

	"tajima1-backgate": "tajima1-backgate.JPG",

	// Path back to Visitor Center

	// Meet up at Visitor Center
	"welcome-end": "welcome-end.JPG",
});

// Define the Characters
monogatari.characters({
	p: {
		name: "{{player.name}}",
		color: "#ff3951",
		directory: "Player",
		sprites: {
			normal: "player (1).jpg",
			handsonhips: "player (2).jpg",
		},
		expressions: {
			normal: "player (1).jpg",
			handsonhips: "player (2).jpg",
		},
	},
	k: {
		name: "Kuwamaru",
		color: "#5bcaff",
		directory: "Kuwamaru",
		sprites: {
			normal: "tatii.png",
			running: "tatii.png",
		},
		expressions: {
			normal: "tatii.png",
			running: "tatii.png",
		},
	},
	n: {
		name: "Nick",
		color: "#5bcaff",
		directory: "Nick",
		sprites: {
			normal: "nick-normal.jpg",
		},
		expressions: {
			normal: "nick-normal.jpg",
		},
	},
	g: {
		name: "George",
		color: "#5bcFff",
		directory: "George",
		sprites: {
			normal: "tatii.png",
			running: "tatii.png",
		},
		expressions: {
			normal: "tatii.png",
			running: "tatii.png",
		},
	},
	d: {
		name: "David",
		color: "#5bc1ff",
		directory: "David",
		sprites: {
			normal: "tatii.png",
			running: "tatii.png",
		},
		expressions: {
			normal: "tatii.png",
			running: "tatii.png",
		},
	},
	z1: {
		name: "Zombie",
		color: "#5bcaff",
		directory: "Zombies",
		sprites: {
			normal: "1.jpg",
		},
		expressions: {
			normal: "1.jpg",
		},
	},
	z2: {
		name: "Zombie",
		color: "#5bcaff",
		directory: "Zombies",
		sprites: {
			normal: "2.jpg",
		},
		expressions: {
			normal: "2.jpg",
		},
	},
	z3: {
		name: "Zombie",
		color: "#5bcaff",
		directory: "Zombies",
		sprites: {
			normal: "3.jpg",
		},
		expressions: {
			normal: "3.jpg",
		},
	},
	z4: {
		name: "Zombie",
		color: "#5bcaff",
		directory: "Zombies",
		sprites: {
			normal: "4.jpg",
		},
		expressions: {
			normal: "4.jpg",
		},
	},
});

const { Storage } = monogatari;

monogatari.script({
	// The game starts here.
	Start: [
		"clear",
		"show scene black with fadeIn",
		//'show scene #f7f6f6 with fadeIn',
		"show particles universe",
		"show scene visitor-center-entrance with fadeIn",
		//'show notification Welcome',
		"play music mainTheme with volume 20 fade 2 loop",
		{
			Input: {
				Text: "What is your name?",
				Validation: function (input) {
					return input.trim().length > 0;
				},
				Save: function (input) {
					this.storage({
						player: {
							name: input,
						},
					});
					return true;
				},
				Revert: function () {
					this.storage({
						player: {
							name: "",
						},
					});
				},
				Warning: "You must enter a name!",
			},
		},

		//'centered Welcome to Kuwamaru\'s Halloween Adventure',

		"hide particles",

		"k:normal Hi {{player.name}}! Welcome to our adventure!",
		"p:normal Hi, Kuwamaru!",
		"k:normal Today we are going to the Tajima Yahei Sericulture Farm.",
		"k:normal We are at the Visitor Center now.",
		"k:normal Let's go meet up with Nick.",

		"show scene visitor-center-entrance with fadeIn",
		{
			Choice: {
				//'Dialog': 'centered Do you know Nick? <br><br><br><br><br><br><br><br><br><br>',
				Dialog: "k:normal Do you know Nick? ",

				Yes: {
					Text: "Yes, let's say hello to Nick.",
					Do: "jump Start-Hello-Nick-Yes",
				},
				No: {
					Text: "No, who is Nick?",
					Do: "jump Start-Hello-Nick-No",
				},
			},
		},
	],

	"Start-Hello-Nick-Yes": [
		"show scene visitor-center-nick with fadeIn",
		"p:normal Hi, Nick!",
		"n:normal Hello, {{player.name}}!",
		"n:normal It's good to see you again!",
		"n:normal Let's get going on our adventure today!",
		"jump Welcome-Center-1",
	],

	"Start-Hello-Nick-No": [
		"show scene visitor-center-entrance with fadeIn",
		"p:normal Ummm... who is Nick?",
		"show scene visitor-center-nick with fadeIn",
		"n:normal Hello, {{player.name}}!",
		"k:normal Nick is a teacher at Goshi Elementary and Sakai Nishi Junior High.",
		"n:normal It's a pleasure to meet you!",
		"p:normal Oh, nice to meet you, too, Nick!",
		"jump Welcome-Center-1",
	],

	// Foreshadow Monsters

	"Welcome-Center-1": [
		"show scene visitor-center-nick with fadeIn",
		"n:normal So this is the entrance to the visitor center.",
		"k:normal Let's go in.",
		"stop music mainTheme with fade 2",
		"show scene visitor-center-nick with shake 1s",
		"play sound monsterRoar with volume 10",
		"k:normal !! What was that?!",
		"play music mainTheme with volume 20 fade 2 loop",
		"show scene visitor-center-nick with fadeIn",

		"p:normal I don't know.",
		"n:normal Was it a dog?",
		"k:normal Maybe. I guess its OK.",
		"k:normal So... lets go in.",
		"p:normal OK. After you!",

		"jump Welcome-Center-2-Silkworms",
	],

	// Going inside the visitor center
	"Welcome-Center-2-Silkworms": [
		// Introduce silkworms
		"show scene visitor-center-silkworms with fadeIn",
		"k:normal These are silkworms.",
		"k:normal Silkworms are caterpillars.",
		"n:normal Just like the Hungry, Hungry Caterpillar!",
		"k:normal Yes... but we can use the thread from silkworm cocoons to make silk.",

		// Show silkworms close up
		"show scene visitor-center-silkworms-closeup with fadeIn",
		"k:normal Here they are! Aren't they cute?",
		"p:normal Ummm... sure.",
		"n:normal Yes, of course.",

		// Add a knowledge point for seeing silkworms
		{
			Function: {
				Apply: () => {
					const {
						inventory: { knowledge, silkwormPoints },
					} = monogatari.storage("stats");
					monogatari.storage({
						stats: {
							inventory: {
								knowledge: knowledge + 1,
								silkwormPoints: true,
							},
						},
					});
				},
			},
		},

		"play sound learningPoint with volume 30",
		"p:normal Hey, I learned something!",
		"p:normal I learned {{stats.inventory.knowledge}} things so far today.",

		"jump Welcome-Center-2-Choice",
	],

	"Welcome-Center-2-Choice": [
		"show scene visitor-center-silkworms with fadeIn",
		// Decide whether to watch the video or the exhibits
		{
			Choice: {
				Dialog:
					"k:normal What do you want to do? Do you want to see a video or see some exhibits? Or do you want to go to the Tajima Yahei Sericulture Farm?",

				Video: {
					Text: "Umm, let's go watch the video.",
					Do: "jump Welcome-Center-2-Video-Check",
				},
				Exhibits: {
					Text: "Umm, let's go see the exhibits.",
					Do: "jump Welcome-Center-2-Exhibits-Check",
				},
				Farm: {
					Text: "Umm, let's go to the farm.",
					Do: "jump Welcome-Center-2-Final-Check",
				},
			},
		},
	],

	"Welcome-Center-2-Video-Check": [
		// Check to see if exhibits have been seen already

		{
			Conditional: {
				Condition: function () {
					return this.storage("videoPoints");
				},
				True: "jump Welcome-Center-2-Video-Repeated",
				False: "jump Welcome-Center-2-Video",
			},
		},
	],

	"Welcome-Center-2-Video": [
		// Introduce silkworms
		"show scene visitor-center-video with fadeIn",
		"k:normal Silk has a lot of history in Japan.",
		"p:normal That's true.",
		"k:normal Japan made a lot of money with silk.",

		"show scene visitor-center-video-kuwamaru with fadeIn",
		"k:normal Shimamura was a good place for mulberry trees and silkworms.",
		"n:normal Oh, I see. So that's why the Tajima family became silkworm farmers.",
		"k:normal Yes, and Tajima Yahei learned a lot about silkworms.",

		"show scene visitor-center-video-tajima with fadeIn",
		"k:normal He went to Europe to learn about them and studied them here in Japan, too.",
		"k:normal He helped people all over Japan to grow silkworms.",
		"n:normal He created <i>yagura</i>, right?",
		"k:normal Yes! <i>Yagura</i> kept silkworm farms cool, so silkworms didn't get sick.",
		"p:normal That's the reason the Tajima Yahei Sericulture Farm is a world heritage site, then.",

		// Add a knowledge point for watching the video

		{
			Function: {
				Apply: () => {
					const {
						inventory: { knowledge },
					} = monogatari.storage("stats");
					monogatari.storage({
						stats: {
							inventory: {
								knowledge: knowledge + 1,
							},
						},
						videoPoints: true,
					});
				},
			},
		},

		"play sound learningPoint with volume 30",
		"p:normal Hey, I learned something!",
		"p:normal I learned {{stats.inventory.knowledge}} things so far today.",
		"jump Welcome-Center-2-Choice",
	],

	"Welcome-Center-2-Video-Repeated": [
		"p:normal Didn't we watch the video already?",
		"jump Welcome-Center-2-Choice",
	],

	"Welcome-Center-2-Exhibits-Check": [
		// Check to see if exhibits have been seen already

		{
			Conditional: {
				Condition: function () {
					return this.storage("exhibitPoints");
				},
				True: "jump Welcome-Center-2-Exhibits-Repeated",
				False: "jump Welcome-Center-2-Exhibits",
			},
		},
	],

	"Welcome-Center-2-Exhibits": [
		// Show exhbits
		"k:normal Let's look at some exhibits.",
		"show scene visitor-center-exhibithouse with fadeIn",

		"k:normal This is a model of Tajima Yahei Sericulture Farm.",
		"p:normal Oh, there are a lot of buildings there.",
		"k:normal Yes, but some of the buildings are not there anymore.",
		"k:normal We'll learn more when we go see the farm later today.",
		"p:normal OK!",

		"show scene visitor-center-exhibitbook with fadeIn",
		"k:normal This are some of the books Tajima Yahei wrote.",
		"p:normal Wow, there are a lot!",

		"show scene visitor-center-exhibitmicroscope with fadeIn",
		"k:normal This is the microscope Tajima Yahei got in Italy.",
		"p:normal Oh, he used it to study silkworms, right?",
		"k:normal Yes. He learned how to keep silkworms healthy.",
		"k:normal That's why he could write so many books.",

		"show scene visitor-center-exhibitshibusawa with fadeIn",
		"k:normal Did you know that Shibusawa Eiichi and Tajima Yahei are relatives?",
		"n:normal Who is Shibusawa Eiichi?",
		"p:normal He's on the new Japanese 10,000 yen bill, isn't he?",
		"k:normal Yes! He helped many people make money with his ideas.",
		"k:normal He helped the silk industry, too. He helped build the Tomioka Silk Mill.",
		"k:normal He talked with Tajima Yahei about going to Europe to sell silkworms.",
		"n:normal Oh, I didn't know that.",

		// Add a knowledge point for going through the exhibits
		{
			Function: {
				Apply: () => {
					const {
						inventory: { knowledge },
					} = monogatari.storage("stats");
					monogatari.storage({
						stats: {
							inventory: {
								knowledge: knowledge + 1,
							},
						},
						exhibitPoints: true,
					});
				},
			},
		},

		"play sound learningPoint with volume 30",
		"p:normal Hey, I learned something!",
		"p:normal I learned {{stats.inventory.knowledge}} things so far today.",

		"jump Welcome-Center-2-Choice",
	],

	"Welcome-Center-2-Exhibits-Repeated": [
		"p:normal Didn't we see the exhibits already?",
		"jump Welcome-Center-2-Choice",
	],

	// Exiting the Welcome Center
	"Welcome-Center-2-Final-Check": [
		// Check to see if exhibits and videos have been seen already

		{
			Conditional: {
				Condition: function () {
					if (this.storage("videoPoints") == false) {
						return "NotReady";
					} else if (this.storage("exhibitPoints") == false) {
						return "NotReady";
					} else {
						return "Ready";
					}
				},
				NotReady: "jump Welcome-Center-2-Final-NotReady",
				Ready: "jump Welcome-Center-2-Final",
			},
		},
	],

	"Welcome-Center-2-Final-NotReady": [
		"show scene visitor-center-entrance with fadeIn",
		// Check to see if exhibits and videos have been seen already

		"k:normal Wait, we're not ready to go yet!",
		"jump Welcome-Center-2-Choice",
	],

	"Welcome-Center-2-Final": ["k:normal Now let's go to the farm!", "jump Path"],

	Path: [
		// Path to Tajima House
		"stop music mainTheme with fade 2",
		"play music farmTheme with volume 20 fade 2 loop",

		"show scene visitor-center-oldvisitorcenter with fadeIn",
		"k:normal This is the old visitor center.",
		"p:normal Oh, can we go inside?",
		"k:normal I don't think so....",
		"n:normal Let's keep going.",

		"show scene path1d-mulberries with fadeIn",
		"k:normal These are mulberries.",
		"p:normal And silkworms eat mulberry leaves, right?",
		"k:normal Yes! The're so good!",
		"p:normal I think... I don't want to eat them.",
		"k:normal That's OK! More for me! (munch munch)",

		"n:normal Do you know the song <i>Here We Go Round the Mulberry Bush</i>?",
		"stop music farmTheme with fade 2",
		"play sound mulberryBush with volume 50 loop",
		"n:normal <i>Here we go round the mulberry bush,</i>",
		"k:normal <i>the mulberry bush, the mulberry bush.</i>",
		"n:normal <i>Here we go round the mulberry bush,</i>",
		"k:normal <i>so early in the morning!</i>",
		"p:normal O...K... Thanks for singing it for me.",
		"stop sound mulberryBush with volume 50 loop",

		"play music farmTheme with volume 20 fade 2 loop",

		"show scene path1c-acrosstheroad with fadeIn",
		"k:normal We have to cross the road here.",
		"p:normal Let's be careful!",
		"k:normal Look left, look right, look left... it's OK!",
		"n:normal Yes, the guide also said it's OK to cross.",

		"show scene path1b-signboard with fadeIn",
		"n:normal The guide said the main gate is over there.",
		"p:normal It's OK. Let's look at the sign!",
		"k:normal It says that the Tajima Yahei Sericulture Farm is just one part of Tomioka Silk Mill World Heritage.",
		"n:normal I want to go see the other places some day.",

		"show scene path1a-backgate with fadeIn",
		"n:normal This is the back gate. Let's go to the main gate.",
		"k:normal OK! Turn left, go straight, then turn right.",

		"show scene tajima1-maingate with fadeIn",
		"jump Tajima-Residence-Main-Choice",
	],

	"Tajima-Residence-Main-Choice": [
		"show scene tajima1-maingate with fadeIn",
		{
			Choice: {
				Dialog:
					"k:normal Do you want to look outside or look inside the farm? Or do you want to go back to the visitor center?",

				Outside: {
					Text: "Let's look around outside.",
					Do: "jump Tajima-Residence-Outside-Main-Check",
				},
				Inside: {
					Text: "Let's look inside the farm.",
					Do: "jump Tajima-Residence-Inside-Main-Check",
				},
				Back: {
					Text: "Let's go back to the visitor center.",
					Do: "jump Path-Back-Check",
				},
			},
		},
	],

	"Tajima-Residence-Outside-Main-Check": [
		// Check to see the outside area has been seen already

		{
			Conditional: {
				Condition: function () {
					return this.storage("outsidePoints");
				},
				True: "jump Tajima-Residence-Outside-Main-Repeated",
				False: "jump Tajima-Residence-Outside-Main",
			},
		},
	],

	"Tajima-Residence-Outside-Main": [
		// Tajima Residence

		"show scene tajima2-outside with fadeIn",
		"p:normal Let's walk around outside a little.",
		"k:normal OK! I'll show you around.",
		"k:normal Let's go to the left.",

		"show scene tajima2-buheihouse with fadeIn",
		"p:normal Oh, this is a nice house!",
		"k:normal Yes! This was Tajima Buhei's house.",
		"k:normal Tajima Buhei was Tajima Yahei's relative.",
		"k:normal The Tajima families all raised silkworms in this area.",
		"k:normal There is a little museum inside this house, too.",
		"n:normal Let's go inside another time.",
		"n:normal My friends are waiting for us in the farm, so we shouldn't take too long.",
		"p:normal Oh, OK.",

		"show scene tajima2-relatives with fadeIn",
		"k:normal This is another Tajima family house.",
		"p:normal It's very pretty.",
		"k:normal Yes, it is!",
		"k:normal Actually, there are about 70 other Tajima family houses here in the Shimamura area.",
		"p:normal That's a lot.",

		// Add a knowledge point for going outside

		{
			Function: {
				Apply: () => {
					const {
						inventory: { knowledge },
					} = monogatari.storage("stats");
					monogatari.storage({
						stats: {
							inventory: {
								knowledge: knowledge + 1,
							},
						},
						outsidePoints: true,
					});
				},
			},
		},

		"play sound learningPoint with volume 30",
		"p:normal Hey, I learned something!",
		"p:normal I learned {{stats.inventory.knowledge}} things so far today.",

		"jump Tajima-Residence-Main-Choice",
	],

	"Tajima-Residence-Outside-Main-Repeated": [
		"p:normal Didn't we go outside already?",
		"jump Tajima-Residence-Main-Choice",
	],



	"Tajima-Residence-Inside-Main-Check": [

			// Check to see if the inside places have been seen already
	
			{
				Conditional: {
					Condition: function () {
						if (this.storage("frontGatePoints") == true && this.storage("museumPoints") == true && this.storage("guidePoints") == true && this.storage("storagePoints") == true && this.storage("factoryPoints") == true && this.storage("housePoints") == true && this.storage("outsidePoints") == true && this.storage("backGatePoints") == true) {
							return "Repeated";
						} else {
							return "Ready";
						}
					},
	
					Repeated: "jump Tajima-Residence-Inside-Main-Repeated",
					Ready: "jump Tajima-Residence-Inside-Start-Check",
				},
			},
		],

	"Tajima-Residence-Inside-Main-Repeated": [
		"p:normal We already went inside!",
		"jump Tajima-Residence-Main-Choice",
	],

	"Tajima-Residence-Inside-Start-Check": [

			// Check to see if G and D have been met already
	
			{
				Conditional: {
					Condition: function () {
						if (this.storage("gAnddPoints") == true ) {
							return "Repeated";
						} else {
							return "Ready";
						}
					},
	
					Repeated: "jump Tajima-Residence-Inside-Choice",
					Ready: "jump Tajima-Residence-Inside-Start",
				},
			},

	],

	"Tajima-Residence-Inside-Start": [
		
		// Tajima Residence
		"show scene tajima1-maingate with fadeIn",
		"k:normal This is the main gate to the Tajima Yahei Sericulture Farm.",
		"k:normal Let's go inside.",
		"n:normal I hope my friends are still here",

		"show scene tajima1-everyonetogether with fadeIn",
		"n:normal Hello, it's George and David!",

		{
			Choice: {
				Dialog: "k:normal Do you know George or David?",

				George: {
					Text: "I know George.",
					Do: "jump Tajima-Residence-Inside-George",
				},
				David: {
					Text: "I know David.",
					Do: "jump Tajima-Residence-Inside-David",
				},
				Both: {
					Text: "I know both George <i>and</i> David.",
					Do: "jump Tajima-Residence-Inside-Both",
				},
			},
		},
	],

	"Tajima-Residence-Inside-George": [
		"show scene tajima1-everyonetogether with fadeIn",
		"g:normal Hey, it's Nick, {{player.name}}, and Kuwamaru.",
		"g:normal What's happening?",
		"n:normal Oh, we just came to see the Tajima Yahei Sericulture Farm.",

		"n:normal By the way, this is my other friend, David.",
		"d:normal Hey, {{player.name}}.",
		"d:normal Nice to meet you!",
		"p:normal Nice to meet you, too!",
		
"jump Tajima-Residence-Inside-Start-Leaving",

	],

	"Tajima-Residence-Inside-David": [
		"show scene tajima1-everyonetogether with fadeIn",
		"d:normal Hey, Nick, {{player.name}}, and Kuwamaru.",
		"d:normal What's up?",
		"n:normal Oh, we just came to see the Tajima Yahei Sericulture Farm.",

		"n:normal By the way, this is my other friend, George.",
		"g:normal Hey, {{player.name}}.",
		"g:normal Nice to meet you!",
		"p:normal Nice to meet you, too!",

"jump Tajima-Residence-Inside-Start-Leaving",
	],

	"Tajima-Residence-Inside-Both": [
		"show scene tajima1-everyonetogether with fadeIn",
		"d:normal Hey, it's Nick, {{player.name}}, and Kuwamaru.",
		"g:normal Hi guys, what's up?",
		"n:normal Oh, we just came to see the Tajima Yahei Sericulture Farm.",

		"g:normal Oh yeah, us, too.",

"jump Tajima-Residence-Inside-Start-Leaving",
	],

	"Tajima-Residence-Inside-Start-Leaving": [
		"show scene tajima1-everyonetogether with fadeIn",

		"d:normal Hey, you just got here, but it's getting dark.",
		"g:normal And a little scary.",
		"d:normal We already saw everything, so we'll go back first and wait for you at the Visitor Center.",
		"g:normal Don't stay here too long! It gets dark very quickly these days.",

		"k:normal OK, see you later!",

		{
			Function: {
				Apply: () => {

					monogatari.storage({
	
						gAnddPoints: true,
					});
				},
			},
		},

		"jump Tajima-Residence-Inside-Choice",

	],

	"Tajima-Residence-Inside-Choice": [
		"show scene tajima1-houseandgarden with fadeIn",
"k:normal We're finally here!",
"k:normal This is the Tajima Yahei Sericulture Farm.",

		{
			Choice: {
				Dialog: "k:normal What do you want to see here?",

				Museum: {
					Text: "The museum.",
					Do: "jump Tajima-Residence-Inside-Museum-Check",
				},
				Buildings: {
					Text: "The buildings.",
					Do: "jump Tajima-Residence-Inside-Buildings-Check",
				},
				House: {
					Text: "The house.",
					Do: "jump Tajima-Residence-Inside-House-Check",
				},
				House: {
					Text: "I want to go back outside.",
					Do: "jump Tajima-Residence-Main-Choice",
				},
			},
		},

	],

	"Tajima-Residence-Inside-Museum-Check": [

		{
			Conditional: {
				Condition: function () {
					if (this.storage("museumPoints") == true  {
						return "Repeated";
					} else {
						return "Ready";
					}
				},

				Repeated: "jump Tajima-Residence-Inside-Museum-Repeated",
				Ready: "jump Tajima-Residence-Inside-Museum",
			},
		},
	],

	"Tajima-Residence-Inside-Museum-Repeated": [
		"p:normal We already went here and met the nice lady.",
		"jump Tajima-Residence-Inside-Choice",
	],

	"Tajima-Residence-Inside-Museum": [


		"show scene tajima1-houseandgarden with fadeIn",
		"show scene tajima1-museumandbuildings with fadeIn",
		"show scene tajima1-parismedals with fadeIn",
		"show scene tajima1-museum1 with fadeIn",
		"show scene tajima1-museum2 with fadeIn",
		"show scene tajima1-museum3 with fadeIn",
		"show scene tajima1-coldstorage with fadeIn",
		"show scene tajima1-workbuilding with fadeIn",
		"show scene tajima1-workbuildingbathroom with fadeIn",
		"show scene tajima1-backgate with fadeIn",

		"show scene tajima2-outside with fadeIn",
		"show scene tajima2-buheihouse with fadeIn",
		"show scene tajima2-relatives with fadeIn",
		"show scene tajima2-backside with fadeIn",

		"show scene tajima1-backgate with fadeIn",
		"show scene tajima1-backgate with fadeIn",

		// Add a knowledge point for see the museum

		{
			Function: {
				Apply: () => {
					const {
						inventory: { knowledge },
					} = monogatari.storage("stats");
					monogatari.storage({
						stats: {
							inventory: {
								knowledge: knowledge + 1,
							},
						},
						museumPoints: true,
					});
				},
			},
		},


	],


		"play sound learningPoint with volume 30",
		"p:normal Hey, I learned something!",
		"p:normal I learned {{stats.inventory.knowledge}} things so far today.",

		"jump Tajima-Residence-Main-Choice",
	],




	"Tajima-Residence-Inside-Main-Repeated": [
		"p:normal Didn't we go inside already?",
		"jump Tajima-Residence-Main-Choice",
	],


	// Exiting the Tajima Yahei Sericulture Farm

	"Path-Back-Check": [

			// Check to see if the farm's places have been seen already
	
			{
				Conditional: {
					Condition: function () {
						if (this.storage("frontGatePoints") == false) {
							return "NotReady";
						} else if (this.storage("museumPoints") == false) {
							return "NotReady";
						} else if (this.storage("guidePoints") == false) {
							return "NotReady";
						} else if (this.storage("storagePoints") == false) {
							return "NotReady";
						} else if (this.storage("factoryPoints") == false) {
							return "NotReady";
						} else if (this.storage("housePoints") == false) {
							return "NotReady";
						} else if (this.storage("outsidePoints") == false) {
							return "NotReady";
						} else if (this.storage("backGatePoints") == false) {
							return "NotReady";
						} else {
							return "Ready";
						}
					},
	
					NotReady: "jump Path-Back-NotReady",
					Ready: "jump Path-Back-Start",
				},
			},
		
	],

	"Path-Back-NotReady": [
		"show scene visitor-center-entrance with fadeIn",
		// Check to see if exhibits and videos have been seen already

		"k:normal Wait, we're not ready to go yet!",
		"k:normal There's something we didn't see yet.",
		"jump Tajima-Residence-Main-Choice",
	],



	scaryTheme: "halloween-bgmgrimdark-amp-gothic-piano-247733.mp3",
	runningTheme: "scary-piano-music-36174.mp3",
	badEndingTheme: "gloomy-atmosphere-for-documentaries-195364.mp3",
	goodEndingTheme: "peaceful-piano-background-music-218762.mp3",


	"Path-Back-Start": [
		// Path back to Visitor Center

	"k:normal Now we're ready to go!",
	"k:normal Let's go out the back gate.",
	"show scene tajima1-houseandgarden with fadeIn",
"n:normal Here's the house again. It's getting kind of dark...",

	"show scene path1a-backgate with fadeIn",
	"stop music mainTheme with fade 2",
	"play music scaryTheme with volume 20 fade 2 loop",

		"k:normal Hmmmm...",
		"p:normal Something is different...",


		"show scene path1b-signboard with fadeIn",
		"n:normal Something sure <i>is</i> different...",
		"play sound monsterRoar with volume 10",
		"k:normal Let's hurry up...",
"play sound monsterRoar with volume 10",

		"show scene path1c-acrosstheroad with fadeIn",
		"show scene path1d-mulberries with fadeIn",

		// Path back to Visitor Center
		"show scene path1a-backgate with fadeIn",

		// Hear a strange sound
		"show scene path1b-signboard with fadeIn",

		// Zombies start coming
		"show scene path1c-acrosstheroad with fadeIn",
		"show scene path1d-mulberries with fadeIn",

		{
			Choice: {
				Dialog: "k:running The zombies are coming! What should we do?",

				Yes: {
					Text: "Hurry up! We have to run across the road!",
					Do: "jump Path-Back-Start-Choice-1-Bad",
				},
				No: {
					Text: "Look carefully, then cross!",
					Do: "jump Path-Back-Start-Choice-1",
				},
			},
		},
	],

	// Bad Ending 1: Got hit by a car and then the zombies ate you.

	"Path-Back-Choice-1-Bad": [
		// Path back to Visitor Center
		"show scene path1c-acrosstheroad with fadeIn",
		"z1:normal You were not careful.",
		"z1:normal You should look left and right before you cross the road.",
		"z1:normal You were hit by a car and then the zombies ate you.",
		"z1:normal Dee-li-cioussssssss.",

		"show message Bad-End",

		"end",
	],

	"Path-Back-Choice-1": [
		// Path back to Visitor Center
		"show scene path1c-acrosstheroad with fadeIn",
		"k:running Whoah! We almost got hit by that car!",
		"p:running We have to be careful!",

		"z1:normal Rrrraaaaaaaaarrrrggggghhhhh...",
		"n:running The zombies are still coming!",

		"show scene path1d-mulberries with fadeIn",
		"k:running Hey, these are mulberries! ",
		"k:running Maybe they like to eat mulberries!",

		{
			Choice: {
				Dialog: "k:running Let's throw some mulberries at them!",

				No: {
					Text: "No, let's keep running!",
					Do: "jump Path-Back-Start-Choice-2",
				},
				Yes: {
					Text: "Yes! Let's try it!",
					Do: "jump Path-Back-Start-Choice-2-Bad",
				},
			},
		},
	],

	// Bad Ending 2: Took too much time throwing mulberries and got eaten.

	"Path-Back-Choice-2-Bad": [
		"show scene path1d-mulberries with fadeIn",
		"k:running Hey! Take that! (throws a mulberry)",
		"z1:normal Oouuuuuchhhhhhhh...",
		"p:running Here's another one!We have to be careful!",
		"z1:normal You were not careful.",
		"z1:normal You should look left and right before you cross the road.",
		"z1:normal You were hit by a car and then the zombies ate you.",
		"z1:normal Dee-li-cioussssssss.",

		"show message Help",

		"Nick Go ahead and create an amazing Game!",
		"Nick I can’t wait to see what story you’ll tell!",
		"end",
	],

	"Path-Back-Choice-1": [
		// Path back to Visitor Center
		"show scene path1c-acrosstheroad with fadeIn",
		"k:running Whoah! We almost got hit by that car!",
		"p:running We have to be careful!",

		"z1:normal Rrrraaaaaaaaarrrrggggghhhhh...",
		"n:running The zombies are still coming!",

		"show scene path1d-mulberries with fadeIn",
		"k:running Hey, these are mulberries! ",
		"k:running Maybe they like to eat mulberries!",

		{
			Choice: {
				Dialog: "k:running Let's throw some mulberries at them!",

				No: {
					Text: "No, let's keep running!",
					Do: "jump Path-Back-Start-Choice-2",
				},
				Yes: {
					Text: "Yes! Let's try it!",
					Do: "jump Path-Back-Start-Choice-2-Bad",
				},
			},
		},
	],

	"Welcome-Center-2-Final": ["k:normal Now let's go to the farm!", "jump Path"],

	// Bad Ending 1: Got hit by a car and then the zombies ate you.

	"Path-Back-Start": [
		// Path back to Visitor Center
		"show scene path1a-backgate with fadeIn",
		"show scene path1b-signboard with fadeIn",
		"show scene path1c-acrosstheroad with fadeIn",
		"show scene path1d-mulberries with fadeIn",

		{
			Choice: {
				Dialog:
					"k:normal Now, do you want to go to the Tajima Yahei Sericulture Farm?",

				Yes: {
					Text: "Yes, let's go see the farm.",
					Do: "jump Welcome-Center-2-Exhibits",
				},
				No: {
					Text: "No, that's OK.",
					Do: "jump Welcome-Center-2-End",
				},
			},
		},

		"jump Welcome-Final-1",
	],

	"Welcome-Final-1": [
		// Path back to Visitor Center
		"show scene path1a-backgate with fadeIn",
		"show scene path1b-signboard with fadeIn",
		"show scene path1c-acrosstheroad with fadeIn",
		"show scene path1d-mulberries with fadeIn",

		{
			Choice: {
				Dialog:
					"k:normal Now, do you want to go to the Tajima Yahei Sericulture Farm?",

				Yes: {
					Text: "Yes, let's go see the farm.",
					Do: "jump Welcome-Center-2-Exhibits",
				},
				No: {
					Text: "No, that's OK.",
					Do: "jump Welcome-Center-2-End",
				},
			},
		},

		"jump WelcomeResidence",

		// Meet up at Visitor Center
		"show scene welcome-end with fadeIn",

		{
			Choice: {
				Dialog:
					"n:normal I think it was a little earthquake. Have you already read some documentation?",

				Yes: {
					Text: "Yes",
					Do: "jump Yes",
				},
				No: {
					Text: "No",
					Do: "jump No",
				},
			},
		},
	],

	Yes: [
		"k Thats awesome!",
		"k Then you are ready to go ahead and create an amazing Game!",
		"k I can’t wait to see what story you’ll tell!",
		"end",
	],

	No: [
		"Nick You can do it now.",

		"show message Help",

		"Nick Go ahead and create an amazing Game!",
		"Nick I can’t wait to see what story you’ll tell!",
		"end",
	],
});
