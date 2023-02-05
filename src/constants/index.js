import card1Desk from '../assets/imgs/cards/card1-desk.webp';
import card1Mob from '../assets/imgs/cards/card1-mob.webp';
import card2Desk from '../assets/imgs/cards/card2-desk.avif';
import card2Mob from '../assets/imgs/cards/card2-mob.avif';
import card3Desk from '../assets/imgs/cards/card3Desk.jpeg';
import card3Mob from '../assets/imgs/cards/card3Mob.webp';
import card4Desk from '../assets/imgs/cards/card4Desk.webp';
import card4Mob from '../assets/imgs/cards/card4Mob.webp';

export const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 962 },
		items: 4
	},
	desktop: {
		breakpoint: { max: 962, min: 765 },
		items: 3
	},
	tablet: {
		breakpoint: { max: 765, min: 575 },
		items: 2
	},
	mobile: {
		breakpoint: { max: 575, min: 0 },
		items: 2
	}
};

export const cards = [
	{
		small: 'SUPERHERO SUPERLATIVES',
		title: 'THE DC COMMUNITY BESTS OF 2022',
		imgDesk: card1Desk,
		imgMob: card1Mob,
		textBtn: "THAT'S A WRAP"
	},
	{
		small: 'DC SHOP',
		title: 'Harley & Ivy 30th Collection',
		imgDesk: card2Desk,
		imgMob: card2Mob,
		textBtn: 'SHOP NOW'
	},
	{
		small: 'BLACK ADAM',
		title: 'NOW STREAMING ON HBO MAX',
		imgDesk: card3Desk,
		imgMob: card3Mob,
		textBtn: 'SIGN UP NOW'
	},
	{
		small: 'DC UNIVERSE INFINITE',
		title: 'DCUI ULTRA EXPANDS TO OVER 32,000 COMICS',
		imgDesk: card4Desk,
		imgMob: card4Mob,
		textBtn: 'JOIN TODAY'
	}
];

export const latest = [
	{
		img: 'https://static.dc.com/2023-01/HQ_TAS_ValentinesDay_16x9.jpg?w=640',
		category: 'MOVIES & TV',
		title: "HARLEY QUINN: A VERY PROBLEMATIC VALENTINE'S DAY SPECIAL",
		link: ''
	},
	{
		img: 'https://static.dc.com/2023-01/DoomGothamTrailer_thumb.jpg?w=640',
		category: 'MOVIES & TV',
		title: 'BATMAN: THE DOOM THAT CAME TO GOTHAM - OFFICIAL TRAILER',
		link: ''
	},
	{
		img: 'https://static.dc.com/2023-01/The%20Cast%20of%20Doom%20Patrol%20Read%20DC%20Comics%20thumbnail.jpg?w=640',
		category: 'MOVIES & TV',
		title: 'THE CAST OF DOOM PATROL READ DC COMICS',
		link: ''
	},
	{
		img: 'https://static.dc.com/2023-01/DC_VideoTB_22YearinReview.jpg?w=480',
		category: "DC IN '22",
		title: 'YEAR IN REVIEW',
		link: ''
	},
	{
		img: 'https://static.dc.com/2023-01/DC_SuperScenes31_BatmanTheBraveAndTheBoldTHUMBNAIL_16x9_Final.jpg?w=640',
		category: 'DC SUPER SCENES',
		title: 'BATMAN: THE BRAVE AND THE BOLD - BIRDS OF PREY MUSICAL',
		link: ''
	},
	{
		img: 'https://static.dc.com/2022-10/DC_YT_Thumb_BattleSuperSons.jpg?w=640',
		category: 'MOVIES & TV',
		title: "BATTLE OF THE SUPER SONS - 'KRYPTO UNLEASHED'",
		link: ''
	},
	{
		img: 'https://static.dc.com/2022-12/FINAL_youtube_thumbnail_Batman_3.png?w=640',
		category: 'GAMES',
		title: 'SUICIDE SQUAD: KILL THE JUSTICE LEAGUE BATMAN REVEAL',
		link: ''
	},
	{
		img: 'https://static.dc.com/2023-01/DC_SuperScenes37_DoomPatrol_Thumbnail.jpg?w=640',
		category: 'DC SUPER SCENES',
		title: 'DOOM PATROL - ROBOTMAN MEETS CYBORG',
		link: ''
	},
	{
		img: 'https://static.dc.com/2022-11/GK_RH_TRAILER_THUMB_16x9_ALT_01.jpg?w=640',
		category: 'GAMES',
		title: 'GOTHAM KNIGHTS - OFFICIAL HEROIC ASSAULT TRAILER',
		link: ''
	},
	{
		img: 'https://static.dc.com/2022-11/MVS_Thumbnail_BlackAdam_16x9.png?w=640',
		category: 'GAMES',
		title: 'MULTIVERSUS - BLACK ADAM GAMEPLAY TRAILER',
		link: ''
	},
	{
		img: 'https://static.dc.com/2022-09/BKM-O3-Thumbnail_WIDE.jpg?w=640',
		category: 'NOW PLAYING',
		title: 'BLACK ADAM - OFFICIAL TRAILER 2',
		link: ''
	},
	{
		img: 'https://static.dc.com/2022-10/dc_tb_batman-spawn_comictrailer.jpg?w=640',
		category: 'COMIC TRAILER',
		title: 'BATMAN/SPAWN',
		link: ''
	}
];

export const godCards = [
	{
		title: 'creature commando',
		img: 'https://static.dc.com/2023-01/dcui_cvr_creaturecommandos.jpg?w=640'
	},
	{
		title: 'supergirl: woman of tomorrow',
		img: 'https://static.dc.com/2023-01/dcui_cvr_supergirlWOT.jpg?w=640'
	},
	{
		title: 'the authority',
		img: 'https://static.dc.com/2023-01/dcui_cvr_theAuthority_BookOne.jpg?w=640'
	},
	{
		title: 'batman & robin',
		img: 'https://static.dc.com/2023-01/dcui_cvr_batmanAndRobin_10.jpg?w=640'
	},
	{
		title: 'booster gold',
		img: 'https://static.dc.com/2023-01/dcui_cvr_BoosterGold_V1.jpg?w=640'
	},
	{
		title: 'saga of the swamp thing',
		img: 'https://static.dc.com/2023-01/dcui_cvr_sagaOfSwampThing.jpg?w=640'
	},
	{
		title: 'suicide squad: the phoenix gambit',
		img: 'https://static.dc.com/2023-01/dcui_cvr_SS_PhoenixGambit.jpg?w=640'
	},
	{
		title: 'hal jordan and the green lantern corps',
		img: 'https://static.dc.com/2023-01/dcui_cvr_HalJordanGreenLantern_V1.jpg?w=640'
	},
	{
		title: '',
		img: 'https://static.dc.com/2022-10/DCUI_tb_SeeMoreNewReleasesx.jpg?w=640'
	}
];

export const getToKnow = [
	{
		name: 'damian wayne',
		img: 'https://static.dc.com/2023-01/dc_hp_GTK_damian.jpg?w=1200',
		button: 'meet damian',
		text: 'The son of Bruce Wayne and Talia al Ghul, Damian Wayne was born to a life of adventure, but he struggles daily against the lesser angels of his nature.'
	},
	{
		name: 'booster gold',
		img: 'https://static.dc.com/2023-01/dc_hp_GTK_boosterGold.jpg?w=1200',
		button: 'meet booster',
		text: 'A scoundrel from the future intent on making a name for himself in the past, Booster Gold has nevertheless exhibited his share of heroism.'
	},
	{
		name: 'amanda waller',
		img: 'https://static.dc.com/2023-01/dc_hp_GTK_waller.jpg?w=1200',
		button: 'meet waller',
		text: "If there's one government bureaucrat who shouldn't be messed with, it’s Amanda Waller, founder of the infamous Task Force X, better known as the Suicide Squad."
	},
	{
		name: 'Swamp thing',
		img: 'https://static.dc.com/2023-01/dc_hp_GTK_swampThing.jpg?w=1200',
		button: 'meet Alec hooland',
		text: 'The swamp has a spirit, and it walks on two legs. A monster that was once a man…'
	},
	{
		name: 'supergirl',
		img: 'https://static.dc.com/2023-01/dc_hp_GTK_supergirl.jpg?w=1200',
		button: 'meet kara',
		text: 'Kara Zor-el was rocketed to Earth from the dying planet Krypton. Faced with an entire world completely unrecognizable from the one she grew up in, she’s the ultimate new girl in school.'
	}
];
