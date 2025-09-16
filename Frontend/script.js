// Sikkim Tourism Website JavaScript

// Data
const places = [
  { id:'rumtek', name:'Rumtek Monastery',cat:'monasteries', img:'https://upload.wikimedia.org/wikipedia/commons/e/e5/Vikramjit-Kakati-Rumtek.jpg', desc:'Seat of the Karmapa; spiritual center with rich heritage.',loc:'7HQ6+CJJ Rumtek Monastery, Rumtek, Sikkim 737135'},
  { id:'pemayangtse', name:'Pemayangtse Monastery', cat:'monasteries', img:'https://www.esikkimtourism.in/wp-content/uploads/2019/03/pegmantysse-monastery-bnnr.jpg', desc:'Among the oldest, with views of Kanchenjunga.', loc: 'Pemayangtse Monastery, Pelling, Sikkim 737113' },
  { id:'enchey', name:'Enchey Monastery', cat:'monasteries', img:'https://www.t2india.com/Images/places/GTK/Attractions/EMG_1.jpg', desc:'Solitary temple famous for Cham dance.', loc: 'Enchey Monastery, Gangtok, Sikkim 737101' },
  { id:'lingdum', name:'Lingdum Monastery', cat:'monasteries', img:'https://s7ap1.scene7.com/is/image/incredibleindia/lingdum-monastery-gangtok-sikkim-1-attr-hero?qlt=82&ts=1742166048831', desc:'Known for its tranquil setting and large Buddha statue.', loc: 'Lingdum Monastery, Ranka, Sikkim 737135' },
  { id:'phodong', name:'Phodong Monastery', cat:'monasteries', img:'https://www.trawell.in/admin/images/upload/134108838Phodong_Main.jpg', desc:'Features ancient murals and a serene atmosphere ideal for reflection.', loc: 'Phodong Monastery, Phodong, Sikkim 737102' },
  { id:'ralang', name:'Ralang Monastery', cat:'monasteries', img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/8f/64/9f/ralong-monastery-view.jpg?w=900&h=-1&s=1', desc:'Its renowned for its vibrant festivals, particularly the Pang Lhabsol festival.', loc: 'Ralang Monastery, Ravangla, Sikkim 737139' },
  { id:'phensang', name:'Phensang Monastery', cat:'monasteries', img:'https://upload.wikimedia.org/wikipedia/commons/3/3f/Phensong_Monastery.jpg', desc:'Offers a peaceful environment for spiritual practice and attracts pilgrims, especially during festivals like Losar.', loc: 'Phensang Monastery, North Sikkim, Sikkim 737102' },
  { id:'tashiding', name:'Tashiding Monastery', cat:'monasteries', img:'https://upload.wikimedia.org/wikipedia/commons/4/47/Mani_stone_slabs_outside_Tashiding_Monastery.jpg', desc:'Holiest monastery; Bumchu ritual.', loc: 'Tashiding Monastery, Tashiding, Sikkim 737113' },
  { id:'tsomgo', name:'Tsomgo (Changu) Lake', cat:'lakes', img:'https://www.trawell.in/admin/images/upload/723415516Gangtok_Tsomgo_Lake_Main.jpg', desc:'A glacial lake known for its changing colors.', loc: 'Tsomgo Lake, East Sikkim, Sikkim 737101' },
  { id:'gurudongmar', name:'Gurudongmar Lake', cat:'lakes', img:'https://upload.wikimedia.org/wikipedia/commons/5/5f/Gurudongmar_Lake_Sikkim%2C_India_%28edit%29.jpg', desc:'One of the highest lakes in the world.', loc: 'Gurudongmar Lake, North Sikkim, Sikkim 737116' },
  { id:'khecheopalri', name:'Khecheopalri Lake', cat:'lakes', img:'https://upload.wikimedia.org/wikipedia/commons/7/71/Foot_bridge_to_Khecheolpalri_Lake.jpg', desc:'known for its pristine waters, floating leaves, and tranquil forest surroundings.', loc: 'Khecheopalri Lake, Pelling, Sikkim 737113' },
  { id:'menmecho', name:'Menmecho Lake', cat:'lakes', img:'https://sikkimtourism.org/wp-content/uploads/2022/04/Lake-Menmecho-1.jpg', desc:'Known for its serene beauty.', loc: 'Menmecho Lake, East Sikkim, Sikkim 737131' },
  { id:'samiti', name:'Samiti Lake', cat:'lakes', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVkrZwJsH-Rnnjb5kn70pbdkFrbtqRImXefA&s', desc:'Popular trekking destination.', loc: 'Samiti Lake, Yuksom, Sikkim 737113' },
  { id:'kathok', name:'Kathok Lake', cat:'lakes', img:'https://adventuresindbad.com/wp-content/uploads/2019/04/kathog-lake.jpeg', desc:'Sacred lake surrounded by dense forests, believed to possess spiritual significance and revered by local communities.', loc: 'Kathok Lake, Yuksom, Sikkim 737113' },
  { id:'elephant', name:'The Elephant Lake', cat:'lakes', img:'https://www.rockyfeet.com/wp-content/uploads/2021/03/DSC_2588-compressed.jpg', desc:'Its known for its unique shape resembling an elephant.', loc: 'Elephant Lake, Lachen, North Sikkim' },
  { id:'cholamu', name:'Cholamu Lake', cat:'lakes', img:'https://www.theindiatourism.com/images/Cholamu-Lake.jpg', desc:'One of the highest lakes in India, situated at an altitude of about 17,000 ft, known for its crystal-clear waters and breathtaking mountainous backdrop.', loc: 'Cholamu Lake, North Sikkim, Sikkim' },
  { id:'nathula', name:'Nathula Pass', cat:'passes', img:'https://holidays.tripfactory.com/sikkim/wp-content/uploads/sites/18/2024/05/Nathula-Pass-with-Clear-sky-and-snow.webp', desc:' \n A historic pass on the ancient Silk Route, connecting Sikkim with Tibet. It is a popular tourist destination and a strategic border post between India and China.', loc: 'Nathula Pass, East Sikkim, Sikkim' },
  { id:'jelepa', name:'Jelepa Pass', cat:'passes', img:'https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/12/43ba823777a7889ae9c7c76d6767aad3_1000x1000.jpg', desc:' Once a major trade route between India and Tibet, it connects Sikkim with Lhasa. The pass is located in the Chumbi Valley and was frequently used during the British Raj.', loc: 'Jelepa Pass, East Sikkim, Sikkim' },
  { id:'chola', name:'Cho La Pass', cat:'passes', img:'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/gjv1t6wbwpgjgugecr3s/Discover%20Adventure%3A%20Cho%20La%20Pass%20Trek%20in%20the%20Himalayas.jpg', desc:' Cho La was historically used for trade between Sikkim and Tibet. It is now less frequented but remains significant in the regions history.', loc: 'Cho La Pass, West Sikkim, Sikkim' },
  { id:'goechala', name:'Goechala Trek', cat:'passes', img:'https://trekthehimalayas.com/images/GoechalaTrek/GalleryDesktop/Summer/d5cb288a-2ca8-4cf2-85b6-03e85d146634_Goechala-2.webp', desc:' A popular trekking pass in West Sikkim, offering stunning views of the Kanchenjunga massif. It is a base for trekkers aiming to explore the regions natural beauty.', loc: 'Goechala, West Sikkim, Sikkim' },
  { id:'dongkha', name:'Dongkha', cat:'passes', img:'https://sikkimtourism.org/wp-content/uploads/2022/04/Dongkha-la-700x500.jpg', desc:' Dongkha La connects Sikkim with Tibet and offers views of the Tibetan Plateau. It is near significant lakes like Tso Lhamo and Gurudongmar.', loc: 'Dongkha La, North Sikkim, Sikkim' },
   
  { id:'gangtok', name:'Gangtok', cat:'towns', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/M.G._Marg%2C_Gangtok_01.jpg/1200px-M.G._Marg%2C_Gangtok_01.jpg', desc:"Gangtok, the capital of Sikkim at 1,650 meters, is a vibrant city that blends Buddhist traditions with modern life. It serves as the gateway to monasteries, lakes, trekking routes, and cultural festivals.", loc: 'Gangtok, East Sikkim, Sikkim' },
  { id:'namchi', name:'Namchi', cat:'towns', img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/6f/c1/79/namchi-ropeway.jpg?w=1200&h=1200&s=1',desc:"Namchi, in South Sikkim, is surrounded by hills and tea gardens and is famous for the 135-foot Samdruptse statue of Guru Padmasambhava. The town’s ropeway offers panoramic views, and nearby temples add spiritual charm.", loc: 'Namchi, South Sikkim, Sikkim' },
  { id:'yuksom', name:'Yuksom', cat:'towns', img:'https://www.tourmyindia.com/treks/wp-content/uploads/2020/08/yuksom-to-dzongri-goecha-la1.jpg', desc:'Yuksom, the historic former capital at 1,780 meters, is known as the coronation site of Sikkim’s first king. It’s a peaceful town with ancient monasteries and serves as a base for treks like Dzongri and Goecha La.', loc: 'Yuksom, West Sikkim, Sikkim' },
  { id:'lachung', name:'Lachung', cat:'towns', img:'https://sikkimtourism.org/wp-content/uploads/2022/04/Lachung-e1653463465649.jpg',desc:'Lachung, a scenic village in North Sikkim at 2,700 meters, is famous for its colorful houses and traditional wooden architecture. It’s a gateway to Yumthang Valley and Zero Point, offering natural beauty and local festivals.', loc: 'Lachung, North Sikkim, Sikkim' },
  { id:'jorethang', name:'Jorethang', cat:'towns', img:'https://holidays.tripfactory.com/sikkim/wp-content/uploads/sites/18/2024/05/How-to-Reach-2.webp',desc:'Jorethang, in South Sikkim, is a charming town surrounded by hills and rivers, known for its bustling markets. It offers access to nearby natural attractions and a glimpse of local festivals and traditions. With its peaceful atmosphere and scenic beauty.', loc: 'Jorethang, South Sikkim, Sikkim' },
  { id:'gyalshing', name:'Gyalshing', cat:'towns', img:'https://www.incredibleindia.gov.in/content/dam/incredible-india/images/trips/sikkim/gyalshing/2-days-trip-gyalshing-gemstone-gateway/rabdentse-ruins-pelling-sikkim-tri-iter-day2.jpg',desc:'Gyalshing, a town in West Sikkim, is known for its natural beauty and historical significance. It serves as the gateway to many historical sites, including monasteries and ruins of old Sikkimese capitals. Surrounded by hills and forests, it offers a peaceful and scenic experience for visitors.', loc: 'Gyalshing, West Sikkim, Sikkim' },
  { id:'ravangla', name:'Ravangla', cat:'towns', img:'https://static2.tripoto.com/media/filter/tst/img/395815/Image/1658660949_psx_20180502_204057.jpg.webp',desc:'Ravangla, in South Sikkim, is a picturesque town nestled amidst hills and lush greenery. It is famous for the giant Buddha statue and Buddha Park, offering a serene spiritual experience. The town also serves as a base for exploring nearby valleys, trekking trails, and local festivals.', loc: 'Ravangla, South Sikkim, Sikkim' },

];

const tours = {
  rumtek: { title:'Rumtek Monastery', desc:'Dharmachakra Center; seat of Karmapa.', history:'Founded (orig) 1740; rebuilt in 1960s; houses Black Crown and Golden Stupa with 16th Karmapa relics.', hotspots:[{x:30,y:52,t:'Main Prayer Hall'},{x:58,y:46,t:'Golden Stupa'},{x:74,y:60,t:'Courtyard'}]},
  pemayangtse: { title:'Pemayangtse Monastery', desc:'One of the oldest, Nyingma order.', history:'Built 1705 by Lama Lhatsun; features seven-tiered Zangdok Palri sculpture depicting Guru Rinpoche\'s celestial palace.', hotspots:[{x:40,y:50,t:'Ancient Murals'},{x:68,y:42,t:'Zangdok Palri'},{x:22,y:62,t:'Mountain View'}]},
  tsomgo: { title:'Tsomgo Lake', desc:'Sacred glacial lake at high altitude.', history:'Color changes seasonally; sacred to locals; offers yak rides and stunning mountain reflections.', hotspots:[{x:26,y:50,t:'Sacred Waters'},{x:52,y:60,t:'Reflections'},{x:78,y:40,t:'Prayer Flags'}]},
  nathula: { title:'Nathula Pass', desc:'Silk Route mountain pass.', history:'Historic trade route; closed after 1962 war, reopened 2006 for border trade. Strategic importance.', hotspots:[{x:24,y:54,t:'Border Fence'},{x:54,y:42,t:'Memorial'},{x:76,y:60,t:'Peaks'}]},
  tashiding: { title:'Tashiding Monastery', desc:'Holiest monastery; Bumchu ritual.', history:'Built 1641; features sacred Thongwa Rangdol chorten. Annual Bumchu festival distributes holy water.', hotspots:[{x:35,y:48,t:'Sacred Chorten'},{x:63,y:60,t:'River Confluence'},{x:79,y:42,t:'Prayer Flags'}]},
  enchey: { title:'Enchey Monastery', desc:'"Solitary" monastery & Cham dance.', history:'Built 1909; blessed by Lama Druptob Karpo (known for flying powers). Famous for annual Cham dance festival.', hotspots:[{x:32,y:50,t:'Prayer Wheels'},{x:60,y:42,t:'Main Shrine'},{x:82,y:58,t:'City View'}]},
};
// Add this object to your data section
const adventureInfo = {
  'goechala-trek-card': {
    title: 'Goecha La Trek',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT8sfAmK5G9CtP9IzAegJOvQ9qhavpxRjxOA&s',
    description: "The Goechala Trek is one of the most famous and challenging treks in the Himalayas, offering spectacular views of the world's third-highest peak, Mount Kanchenjunga. The trek takes you through rhododendron forests, lush meadows, and high-altitude pastures. It’s a journey for serious trekkers seeking an exhilarating adventure and unparalleled natural beauty."
    
  },
  'rafting-card': {
    title: 'River Rafting in Teesta River',
    image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2020/02/shutterstock_1072567364.jpg',
    description: "The Teesta River, with its turbulent rapids, offers an adrenaline-pumping experience for river rafting enthusiasts. The river flows through deep gorges and lush green valleys, providing a scenic backdrop for the thrilling adventure. It's suitable for both beginners and experienced rafters, with various grades of rapids to choose from."
  },
  'paragliding-card': {
    title: 'Paragliding in Gangtok',
    image: 'https://media1.thrillophilia.com/filestore/mnwodlvouoetuum0ax7d0s0srbzi_PARAGLYDIN.jpg',
    description: "Soar like a bird over the rolling hills, majestic mountains, and scenic valleys of Gangtok. Paragliding offers a unique perspective of the landscape, including monasteries and verdant forests. It’s an unforgettable experience for those who love adventure and want a bird’s-eye view of Sikkim's breathtaking terrain."
  },
  'biking-card': {
    title: 'Mountain Biking on the Silk Route',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQUR2ENl37lLC_mXjp9rIEonPBxPc95EIB0g&s',
    description: "Explore the historic Old Silk Route on two wheels. This thrilling mountain biking trail takes you through winding roads, ancient trade paths, and remote villages. It's a challenging but rewarding journey that combines physical activity with a deep dive into the region’s history and culture. The route offers stunning views of the Himalayan range and its pristine landscapes."
  }
};


document.addEventListener('DOMContentLoaded', () => {
    const monthTabs = document.querySelectorAll('.month-tab');
    const mainImage = document.getElementById('main-image');
    const festivalDate = document.getElementById('festival-date');
    const festivalName = document.getElementById('festival-name');

    // Consolidated data source for all months
    const calendarData = {
        january: {
            image: "https://i.ytimg.com/vi/c6JmPhUiKjA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBcw01NU1iRNN2naNSYIFgi99qUHQ",
            date: "14 January",
            name: "Makar Sankranti"
        },
        february: {
            image: "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2021/02/Losar-Festival-Ladakh.jpg?fit=1024%2C683&ssl=1",
            date: "28 February",
            name: "Losar"
        },
        march: {
            image: "https://www.fabhotels.com/blog/wp-content/uploads/2019/08/Ram-Navami.jpg",
            date: "25 March",
            name: "RAMA NAVAMI"
        },
        april: {
            image: "https://sikkimproject.org/wp-content/uploads/2021/09/Rituals-of-Sakewa.-Photo-_-Yawan-Rai.jpg",
            date: "9 April",
            name: "Sakewa (Rai community)"
        },
        may: {
            image: "https://pbs.twimg.com/media/FS2pDMCacAAXklG.jpg",
            date: "23 May",
            name: "Buddha Purnima"
        },
        june: {
            image: "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20190319114510/DSC_0270-1024x683.jpg",
            date: "14 June",
            name: "Pang Lhabsol Preparations"
        },
        july: {
            image: "https://www.shutterstock.com/image-photo/guru-padmasambhava-sataue-sikkim-260nw-2343811367.jpg",
            date: "17 July",
            name: "Guru Rinpoche’s Thunkar Tshechu"
        },
        august: {
            image: "https://i0.wp.com/www.gktoday.in/wp-content/uploads/2015/08/tendong-lho-rum-faat-festival-of-ethnic-lepcha-tribe-of-sikkim-celebrated.jpg?w=1920&ssl=1",
            date: "8 August",
            name: "Tendong Lho Rum Faat (Lepcha Festival)"
        },
        september: {
            image: "https://sikkimtourism.gov.in/Content/Pics/navigationPages/FindMoreExperience/PANG-LHABSOL.jpg",
            date: "7 September",
            name: "Pang Lhabsol"
        },
        october: {
            image: "https://static.bankbazaar.com/images/india/infographic/dussehra-holidays.webp",
            date: "10-20 October",
            name: "Dasain (Vijaya Dashami)"
        },
        november: {
            image: "https://media.assettype.com/english-sentinelassam%2Fimport%2Fwp-content%2Fuploads%2F2018%2F11%2FDiwali-2018-sikkim-1.jpg?w=480&dpr=2&auto=format%2Ccompress&fit=max&q=85",
            date: "1 November",
            name: "Tihaar (Deepawali)"
        },
        december: {
            image: "https://i.natgeofe.com/k/dfc7bec2-0657-4887-81a7-6d024a8c3f70/WH-XmasTree_4x3.jpg",
            date: "25 December",
            name: "Christmas"
        }
    };
    const displayMonth = (month) => {
        const data = calendarData[month.toLowerCase()];
        if (data) {
            mainImage.src = data.image;
            festivalDate.textContent = data.date;
            festivalName.textContent = data.name;
        }
    };

    monthTabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
            monthTabs.forEach(t => t.classList.remove('active'));
            event.currentTarget.classList.add('active');
            const selectedMonth = event.currentTarget.getAttribute('data-month');
            displayMonth(selectedMonth);
        });
    });

    displayMonth('january');
});

const monasteries = {
  rumtek: {
    name:'Rumtek Monastery',
    history:'Originally built in 1740, reconstructed in 1960s by 16th Karmapa as his main seat in exile. Serves as the seat of the Karma Kagyu lineage outside Tibet and houses the sacred Black Crown.',
    manuscripts:['Kangyur (Buddha\'s teachings) in gold letters','Kagyu lineage prayer books','Ancient Tibetan medical texts','Historical records of Karmapa lineage'],
    artifacts:['Black Crown of the Karmapas','Golden Stupa containing 16th Karmapa\'s relics','Sacred ritual objects and thangkas','Ancient Buddhist sculptures']
  },
  pemayangtse: {
    name:'Pemayangtse Monastery',
    history:'Built in 1705 by Lama Lhatsun Chempo, meaning "Perfect Sublime Lotus." Was the head monastery controlling all others in Sikkim. Famous for its seven-tiered wooden sculpture.',
    manuscripts:['Ancient Nyingma tantric texts','Manuscripts on Guru Rinpoche\'s teachings','Traditional Tibetan medical manuscripts','Historical chronicles of Sikkim'],
    artifacts:['Seven-tiered Zangdok Palri sculpture','Ancient masks used in Cham dances','Sacred relics of Guru Rinpoche','Traditional thangka paintings']
  },
  tashiding: {
    name:'Tashiding Monastery',
    history:'Founded in 1641, considered the holiest monastery in Sikkim. Built where Guru Rinpoche meditated. Famous for Thongwa Rangdol chorten and annual Bumchu festival.',
    manuscripts:['Sacred texts on Guru Rinpoche\'s life','Nyingma ritual and ceremonial texts','Ancient prophecies and teachings','Traditional Tibetan astrology texts'],
    artifacts:['Thongwa Rangdol sacred chorten','Holy water vessels for Bumchu','Ancient prayer wheels','Guru Rinpoche\'s sacred relics']
  },
  enchey: {
    name:'Enchey Monastery',
    history:'Built in 1909 on the site blessed by Lama Druptob Karpo, a tantric master known for his flying abilities. "Enchey" means solitary temple. Famous for annual Cham dance.',
    manuscripts:['Tantric meditation texts','Traditional Tibetan calendar calculations','Ritual dance (Cham) instructions','Local historical records'],
    artifacts:['Traditional Cham dance masks','Sacred ritual instruments','Ancient Buddhist statues','Prayer flags and ceremonial items']
  }
};

const hotels = [
  { id:1, name:'Hotel Tashi Delek',img:"hotel1.webp", loc:'M.G. Marg, Gangtok, Enchey Monastery (2.5 km)', rating:4.5, price:'₹3,500', cat:'luxury', amenities:['WiFi','Restaurant','Room Service','Mountain View'] },
  { id:2, name:'The Elgin Nor-Khill',img:"hotel2.jpg", loc:'Tibet Road, Gangtok, Ranka Monastery (13 km)', rating:4.8, price:'₹8,500', cat:'luxury', amenities:['Spa','Heritage Property','Fine Dining','Concierge'] },
  { id:3, name:'Hotel Sonam Delek',img:"hotel3.jpg", loc:'Pelling, West Sikkim, Enchey Monastery (1.8 km)', rating:4.2, price:'₹2,800', cat:'mid-range', amenities:['WiFi','Restaurant','Garden','Kanchenjunga View'] },
  { id:4, name:'Zostel Gangtok',img:"hotel4.jpg", loc:'Development Area, Gangtok, Gonjang Monastery(8 km)', rating:4.0, price:'₹800', cat:'budget', amenities:['Common Kitchen','Lockers','WiFi','Social Area'] },
  { id:5, name:'Summit Newa Regency',img:"hotel5.jpg", loc:'New Market, Gangtok, Sangachoeling Monastery (2.1 km)', rating:4.3, price:'₹4,200', cat:'mid-range', amenities:['Business Center','Restaurant','WiFi','Parking'] },
  { id:6, name:'Bamboo Retreat', img:"hotel6.jpeg",loc:'Namchi, South Sikkim, Rumtek Monastery(5.4 km)', rating:4.6, price:'₹5,500', cat:'luxury', amenities:['Organic Garden','Yoga','Spa','Nature Walks'] },
  { id:7, name:'The Oasis Holiday Home & Restaurant',img:"hotel7.jpg", loc:'P.N.G School Road, Enchey Monastery (3 km)', rating:4.8, price:'₹950', cat:'budget', amenities:['WiFi','Breakfast','Room Service','Mountain View'] },
  { id:8, name:'The Z Retreat & Spa Gangtok',img:"hotel8.jpg", loc:'Lower Bojoghari,Gojang Monastery (2.5km)', rating:4.6, price:'₹1800', cat:'budget', amenities:['WiFi','Restaurant','Room Service','Swimming Pool','Spa'] },
  { id:9, name:'Hotel Tempo Heritage Resort',img:"hotel9.jpg", loc:'JN Road, Enchey Monastery(2 km)', rating:4.7, price:'₹2600', cat:'mid-range', amenities:['WiFi','Fitness Center','Room Service','Swimming Pool','Spa'] },
];

const restaurants = [
  { id:1, name:'Taste of Tibet', cuisine:'Tibetan',img:"r1.jpg", loc:'M.G. Marg, Gangtok', rating:4.6, price:'₹200–500', specials:['Momos (Steamed/Fried)','Thukpa (Noodle Soup)','Tingmo (Steamed Bread)','Butter Tea'] },
  { id:2, name:"9'INE Native Cuisine", cuisine:'Sikkimese/Nepali',img:"r2.jpg", loc:'Deorali, Gangtok', rating:4.4, price:'₹150–400', specials:['Gundruk (Fermented Leafy Greens)','Kinema (Fermented Soybeans)','Dhindo (Traditional Porridge)','Sel Roti (Ring-shaped Bread)'] },
  { id:3, name:'Pork House', cuisine:'Local/Continental',img:"r3.jpg", loc:'Tibet Road, Gangtok', rating:4.3, price:'₹250–600', specials:['Pork with Bamboo Shoots','Smoked Pork Curry','Pork Sekuwa (BBQ)','Traditional Pork Stew'] },
  { id:4, name:"Baker's Cafe", cuisine:'Bakery/Continental',img:"r4.jpg", loc:'M.G. Road, Gangtok', rating:4.2, price:'₹80–250', specials:['Chocolate Croissants','Apple Pie','Fresh Bread','Local Honey Cake'] },
  { id:5, name:'Melting Point Restaurant', cuisine:'Multi-cuisine',img:"r5.jpg", loc:'Lal Bazaar, Gangtok', rating:4.7, price:'₹400–800', specials:['Yak Cheese Pasta','Himalayan Trout','Chura Shapta (Yak Cheese with Chili)','Local Wine Selection'] },
];

const experiences = [
  { name:'Monastery Hopping Tour',img:"e1.jpg", duration:'Full Day', price:'₹2,500', info:'Visit sacred monasteries including Rumtek, Enchey, and Do-Drul Chorten with expert guides.' },
  { name:'Kanchenjunga Sunrise Trek',img:"e2.jpg", duration:'2 Days', price:'₹5,000', info:'Trek to spectacular viewpoints for sunrise views of the world\'s third highest peak.' },
  { name:'Traditional Cooking Class',img:"e3.jpg", duration:'Half Day', price:'₹1,500', info:'Learn to cook authentic Sikkimese dishes like momos, thukpa, and gundruk with local families.' },
  { name:'River Rafting Adventure',img:"e4.jpg", duration:'Full Day', price:'₹3,500', info:'Experience thrilling white-water rafting on Teesta and Rangeet rivers with safety equipment.' },
  { name:'Cultural Heritage Walk', img:"e5.jpg",duration:'Half Day', price:'₹1,200', info:'Explore Gangtok\'s cultural sites, local markets, and traditional architecture with local guides.' },
  { name:'High Altitude Lake Tour',img:"e6.jpg", duration:'Full Day', price:'₹4,000', info:'Visit sacred Tsomgo Lake and Nathula Pass (permits included) with yak rides and photo stops.' },
];

// Initialize everything when DOM loads
document.addEventListener('DOMContentLoaded', function() {
  initializeTabs();
  buildPlaces();
  buildVirtualTour();
  initializeCalendar();
  initializeTripPlanner();
  initializeHistory();
  initializeModals();
});

// Simple tab navigation
function initializeTabs() {
  const nav = document.getElementById('mainNav');
  const pages = document.querySelectorAll('.tabpage');
  
  function activate(tab) {
    pages.forEach(p => p.classList.toggle('active', p.id === tab));
    document.querySelectorAll('[data-tab]').forEach(a => a.classList.toggle('active', a.getAttribute('data-tab') === tab));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  // Main nav click handler
  nav.addEventListener('click', (e) => {
    const a = e.target.closest('[data-tab]');
    if (!a) return;
    e.preventDefault();
    activate(a.getAttribute('data-tab'));
  });
  
  // Any element with data-tab should switch too (CTAs, footer links)
  document.body.addEventListener('click', (e) => {
    const a = e.target.closest('a[data-tab], button[data-tab]');
    if (!a) return;
    const tab = a.getAttribute('data-tab');
    if (!tab) return;
    e.preventDefault();
    activate(tab);
  });
}

// Build Places
function buildPlaces() {
  const grid = document.getElementById('placeGrid');
  if (!grid) return;
  
  places.forEach(p => {
    const el = document.createElement('article');
    el.className = 'card';
    el.dataset.cat = p.cat;
    el.innerHTML = `
      <div class="img"><img src="${p.img}" alt="${p.name}"></div>
      <div class="body">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <p><i class="fa-solid fa-location-dot"></i> ${p.loc || 'Location not available'}</p>
        <div class="rating"><i class="fa-solid fa-star"></i> ${(4 + Math.random()).toFixed(1)}</div>
      </div>`;
    grid.appendChild(el);
  });

  // Place Filters
  const filters = document.getElementById('placeFilters');
  if (filters) {
    filters.addEventListener('click', (e) => {
      const b = e.target.closest('.tab');
      if(!b) return;
      filters.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      const f = b.getAttribute('data-filter');
      for(const card of grid.children) {
        card.style.display = (f === 'all' || card.dataset.cat === f) ? '' : 'none';
      }
    });
  }
}

// Build Virtual Tour
function buildVirtualTour() {
  const list = document.getElementById('tourList');
  if (!list) return;
  
  Object.keys(tours).forEach(id => {
    const c = document.createElement('div');
    c.className = 'pill';
    c.style.cursor = 'pointer';
    c.dataset.tour = id;
    c.innerHTML = `<i class="fa-solid fa-vr-cardboard"></i> ${tours[id].title}`;
    list.appendChild(c);
  });

  const viewer = document.getElementById('vrViewer');
  const title = document.getElementById('tourTitle');
  const desc = document.getElementById('tourDesc');
  const hist = document.getElementById('tourHistoryLabel');

  function renderHotspots(tour) {
    // Clear old hotspots
    viewer.querySelectorAll('.vr-hotspot, .vr-tooltip').forEach(n => n.remove());
    
    // Add new hotspots
    tour.hotspots.forEach(h => {
      const dot = document.createElement('div');
      dot.className = 'vr-hotspot';
      dot.style.left = h.x + '%';
      dot.style.top = h.y + '%';
      
      const tip = document.createElement('div');
      tip.className = 'vr-tooltip';
      tip.style.left = h.x + '%';
      tip.style.top = h.y + '%';
      tip.textContent = h.t;
      
      dot.addEventListener('click', () => {
        alert(`Point of Interest: ${h.t}\n\nThis interactive hotspot would normally show detailed information about this specific area of the monastery or landmark.`);
      });
      
      viewer.appendChild(dot);
      viewer.appendChild(tip);
    });
  }

  // Tour selection
  list.addEventListener('click', (e) => {
    const pill = e.target.closest('[data-tour]');
    const id = pill?.dataset.tour;
    if(!id) return;
    
    // Update active state
    list.querySelectorAll('.pill').forEach(p => p.style.background = '#f3f6ff');
    pill.style.background = '#667eea';
    pill.style.color = '#fff';
    
    const t = tours[id];
    title.textContent = t.title;
    desc.textContent = t.desc;
    hist.textContent = t.history;
    renderHotspots(t);
    
    // Update viewer background with location-specific styling
    viewer.style.background = `linear-gradient(135deg, #667eea 0%, #764ba2 100%), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="50" font-size="8" fill="white" opacity="0.1">${t.title}</text></svg>')`;
  });

  // VR Controls (mock functionality)
  document.getElementById('zoomIn')?.addEventListener('click', () => alert('Zoom In: This would zoom into the 360° view'));
  document.getElementById('zoomOut')?.addEventListener('click', () => alert('Zoom Out: This would zoom out of the 360° view'));
  document.getElementById('reset')?.addEventListener('click', () => alert('Reset View: This would reset the 360° view to default position'));
  document.getElementById('fullscreen')?.addEventListener('click', () => {
    if (viewer.requestFullscreen) {
      viewer.requestFullscreen();
    } else {
      alert('Fullscreen: This would expand the 360° viewer to fullscreen mode');
    }
  });
}

// Calendar functionality
function initializeCalendar() {
  const title = document.getElementById('calTitle');
  const grid = document.getElementById('calGrid');
  const prev = document.getElementById('prevMonth');
  const next = document.getElementById('nextMonth');

  if (!title || !grid || !prev || !next) return;

  let current = new Date();

  function formatDate(y, m, d) { 
    return `${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`; 
  }

  function drawCalendar() {
    grid.innerHTML = '';
    const y = current.getFullYear();
    const m = current.getMonth();
    title.textContent = current.toLocaleString('default', { month:'long', year:'numeric' });

    const first = new Date(y, m, 1);
    const last = new Date(y, m+1, 0);
    const startDay = first.getDay();
    
    // Empty cells for days before month starts
    for(let i = 0; i < startDay; i++) {
      const c = document.createElement('div');
      c.className = 'cal-cell';
      grid.appendChild(c);
    }
    
    // Days of the month
    for(let d = 1; d <= last.getDate(); d++) {
      const c = document.createElement('div');
      const key = formatDate(y, m, d);
      const ev = festivals[key];
      c.className = 'cal-cell' + (ev ? ' event' : '');
      c.innerHTML = `<div class="d">${d}</div>${ev ? `<div class="tag">${ev.name}</div>` : ''}`;
      
      if(ev) {
        c.style.cursor = 'pointer';
        c.onclick = () => openEventModal(key, ev);
      }
      
      grid.appendChild(c);
    }
  }

  function openEventModal(date, ev) {
    const modal = document.getElementById('eventModal');
    modal.classList.add('show');
    document.getElementById('eventTitle').textContent = ev.name + ' — ' + ev.type;
    document.getElementById('eventDate').innerHTML = `<i class="fa-solid fa-calendar-days"></i> ${new Date(date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`;
    document.getElementById('eventDesc').textContent = ev.desc;
    
    const wrap = document.getElementById('eventHighlights');
    wrap.innerHTML = '';
    (ev.highlights || []).forEach(h => {
      const pill = document.createElement('div');
      pill.className = 'pill';
      pill.innerHTML = `<i class="fa-solid fa-sparkles"></i> ${h}`;
      wrap.appendChild(pill);
    });
  }

  prev.onclick = () => { current.setMonth(current.getMonth()-1); drawCalendar(); };
  next.onclick = () => { current.setMonth(current.getMonth()+1); drawCalendar(); };

  drawCalendar();

  // Build festival showcase (next 4 upcoming events)
  const showcase = document.getElementById('festivalShowcase');
  if (showcase) {
    const now = new Date();
    Object.entries(festivals)
      .map(([d,ev]) => ({ date:new Date(d), d, ev }))
      .filter(x => x.date >= now)
      .sort((a,b) => a.date - b.date)
      .slice(0, 4)
      .forEach(x => {
        const card = document.createElement('article');
        card.className = 'card';
        card.innerHTML = `
          <div class="img"><img src="https://source.unsplash.com/600x400/?festival,celebration,sikkim&sig=${Math.random()}" alt="${x.ev.name}"></div>
          <div class="body">
            <h3>${x.ev.name}</h3>
            <p class="pill"><i class="fa-solid fa-calendar-day"></i> ${x.date.toDateString()}</p>
            <p>${x.ev.desc.substring(0, 120)}...</p>
            <p><button class="btn primary">Learn More</button></p>
          </div>`;
        card.querySelector('button').onclick = () => openEventModal(x.d, x.ev);
        showcase.appendChild(card);
      });
  }
}

// Trip Planner functionality
function initializeTripPlanner() {
  const hotelGrid = document.getElementById('hotelGrid');
  const restGrid = document.getElementById('restGrid');
  const expGrid = document.getElementById('expGrid');

  function generateStars(rating) {
    let stars = '';
    const full = Math.floor(rating);
    const half = (rating % 1) >= 0.5;
    
    for(let i = 0; i < full; i++) {
      stars += '<i class="fa-solid fa-star"></i>';
    }
    if(half) {
      stars += '<i class="fa-solid fa-star-half-stroke"></i>';
    }
    const remaining = 5 - Math.ceil(rating);
    for(let i = 0; i < remaining; i++) {
      stars += '<i class="fa-regular fa-star"></i>';
    }
    return stars;
  }

  function renderHotels(filter = 'all') {
    if (!hotelGrid) return;
    hotelGrid.innerHTML = '';
    
    hotels.filter(h => filter === 'all' || h.cat === filter).forEach(h => {
      const c = document.createElement('article');
      c.className = 'card';
      c.innerHTML = `
        <div class="img"><img src="images/${h.img}" alt="${h.name}"></div>
        <div class="body">
          <h3>${h.name}</h3>
          <p><i class="fa-solid fa-location-dot"></i> ${h.loc}</p>
          <p class="rating">${generateStars(h.rating)} <span style="margin-left:6px;">${h.rating.toFixed(1)}</span></p>
          <p class="pill"><i class="fa-solid fa-indian-rupee-sign"></i> ${h.price} / night</p>
          <div style="margin: 8px 0;">
            ${h.amenities.map(a => `<span class="pill" style="font-size: 0.8rem; padding: 2px 6px;"><i class="fa-solid fa-check"></i> ${a}</span>`).join(' ')}
          </div>
          <p><button class="btn primary" style="margin-right: 8px;">Book Now</button><button class="btn" style="border:1px solid #667eea;color:#667eea;background:#fff;">Details</button></p>
        </div>`;
      
      c.querySelector('.primary').onclick = () => alert(`Booking ${h.name}...\n\nPrice: ${h.price} per night\nAmenities: ${h.amenities.join(', ')}\n\n(Demo - Booking system would integrate here)`);
      c.querySelector('button.btn:not(.primary)').onclick = () => alert(`${h.name} Details:\n\nLocation: ${h.loc}\nRating: ${h.rating}/5\nAmenities: ${h.amenities.join(', ')}\n\n(Demo - Detailed view would open here)`);
      
      hotelGrid.appendChild(c);
    });
  }

  function renderRestaurants() {
    if (!restGrid) return;
    restGrid.innerHTML = '';
    
    restaurants.forEach(r => {
      const c = document.createElement('article');
      c.className = 'card';
      c.innerHTML = `
        <div class="img"><img src="images/${r.img}" alt="${r.name}"></div>
        <div class="body">
          <h3>${r.name}</h3>
          <p><span class="pill"><i class="fa-solid fa-utensils"></i> ${r.cuisine}</span></p>
          <p><i class="fa-solid fa-location-dot"></i> ${r.loc}</p>
          <p class="rating">${generateStars(r.rating)} <span style="margin-left:6px;">${r.rating.toFixed(1)}</span></p>
          <div style="margin: 12px 0;">
            <strong>Must-Try Specialties:</strong><br>
            ${r.specials.map(s => `<span class="pill" style="margin: 2px; background: #fff3cd; color: #856404;"><i class="fa-solid fa-bowl-food"></i> ${s}</span>`).join(' ')}
          </div>
          <p class="pill" style="background: #d1ecf1; color: #0c5460;"><i class="fa-solid fa-indian-rupee-sign"></i> ${r.price}</p>
        </div>`;
      restGrid.appendChild(c);
    });
  }

  function renderExperiences() {
    if (!expGrid) return;
    expGrid.innerHTML = '';
    
    experiences.forEach(x => {
      const c = document.createElement('article');
      c.className = 'card';
      c.innerHTML = `
        <div class="img"><img src="images/${x.img}" alt="${x.name}"></div>
        <div class="body">
          <h3>${x.name}</h3>
          <p><span class="pill"><i class="fa-solid fa-clock"></i> ${x.duration}</span></p>
          <p>${x.info}</p>
          <p class="pill" style="background: #d4edda; color: #155724;"><i class="fa-solid fa-indian-rupee-sign"></i> ${x.price}</p>
          <p><button class="btn primary">Book Experience</button></p>
        </div>`;
      
      c.querySelector('button').onclick = () => alert(`Booking ${x.name}...\n\nDuration: ${x.duration}\nPrice: ${x.price}\n\n${x.info}\n\n(Demo - Booking system would integrate here)`);
      expGrid.appendChild(c);
    });
  }

  // Tab switching for trip planner
  const planTabs = document.getElementById('planTabs');
  if (planTabs) {
    planTabs.addEventListener('click', (e) => {
      const b = e.target.closest('.tab'); 
      if(!b) return;
      
      planTabs.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      
      const target = b.getAttribute('data-target');
      document.querySelectorAll('.plan-pane').forEach(p => p.classList.add('hidden'));
      document.getElementById(target)?.classList.remove('hidden');
    });
  }

  // Hotel category filters
  const hotelFilters = document.getElementById('hotelFilters');
  if (hotelFilters) {
    hotelFilters.addEventListener('click', (e) => {
      const b = e.target.closest('.tab'); 
      if(!b) return;
      
      hotelFilters.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      renderHotels(b.getAttribute('data-hfilter'));
    });
  }

  // Initial renders
  renderHotels('all');
  renderRestaurants();
  renderExperiences();
}

// History section
function initializeHistory() {
  // Timeline data
  const timelineData = [
    { year:'1642', title:'Foundation of Sikkim', desc:'Phuntsog Namgyal crowned as the first Chogyal (king) of Sikkim at Yuksom by the three learned lamas.' },
    { year:'1705', title:'Pemayangtse Built', desc:'Construction of Pemayangtse Monastery, one of the oldest and most important monasteries in Sikkim.' },
    { year:'1835', title:'Treaty of Titalia', desc:'British East India Company begins influence in Sikkim affairs following conflicts with Nepal.' },
    { year:'1861', title:'Treaty of Tumlong', desc:'Sikkim becomes a British protectorate while retaining internal autonomy under the Chogyal.' },
    { year:'1947', title:'India\'s Independence', desc:'After India\'s independence, Sikkim continues as a protectorate under the Government of India.' },
    { year:'1975', title:'Merger with India', desc:'Following a referendum, Sikkim becomes the 22nd state of India, ending 333 years of Chogyal rule.' },
  ];
  const monasteries = {
  rumtek: {
    name:'Rumtek Monastery',
    history:'Originally built in 1740, reconstructed in 1960s by 16th Karmapa as his main seat in exile. Serves as the seat of the Karma Kagyu lineage outside Tibet and houses the sacred Black Crown.',
    manuscripts:['Kangyur (Buddha\'s teachings) in gold letters','Kagyu lineage prayer books','Ancient Tibetan medical texts','Historical records of Karmapa lineage'],
    artifacts:['Black Crown of the Karmapas','Golden Stupa containing 16th Karmapa\'s relics','Sacred ritual objects and thangkas','Ancient Buddhist sculptures'],
    image: 'https://www.exoticmiles.com/gangtok/rumtek-monastery/'
  },
  pemayangtse: {
    name:'Pemayangtse Monastery',
    history:'Built in 1705 by Lama Lhatsun Chempo, meaning "Perfect Sublime Lotus." Was the head monastery controlling all others in Sikkim. Famous for its seven-tiered wooden sculpture.',
    manuscripts:['Ancient Nyingma tantric texts','Manuscripts on Guru Rinpoche\'s teachings','Traditional Tibetan medical manuscripts','Historical chronicles of Sikkim'],
    artifacts:['Seven-tiered Zangdok Palri sculpture','Ancient masks used in Cham dances','Sacred relics of Guru Rinpoche','Traditional thangka paintings'],
    image: 'https://uasatish.com/wp-content/uploads/2017/08/Front-Entrance.jpg'
  },
  tashiding: {
    name:'Tashiding Monastery',
    history:'Founded in 1641, considered the holiest monastery in Sikkim. Built where Guru Rinpoche meditated. Famous for Thongwa Rangdol chorten and annual Bumchu festival.',
    manuscripts:['Sacred texts on Guru Rinpoche\'s life','Nyingma ritual and ceremonial texts','Ancient prophecies and teachings','Traditional Tibetan astrology texts'],
    artifacts:['Thongwa Rangdol sacred chorten','Holy water vessels for Bumchu','Ancient prayer wheels','Guru Rinpoche\'s sacred relics'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Mani_stone_slabs_outside_Tashiding_Monastery.jpg'
  },
  enchey: {
    name:'Enchey Monastery',
    history:'Built in 1909 on the site blessed by Lama Druptob Karpo, a tantric master known for his flying abilities. "Enchey" means solitary temple. Famous for annual Cham dance.',
    manuscripts:['Tantric meditation texts','Traditional Tibetan calendar calculations','Ritual dance (Cham) instructions','Local historical records'],
    artifacts:['Traditional Cham dance masks','Sacred ritual instruments','Ancient Buddhist statues','Prayer flags and ceremonial items'],
    image: 'https://www.t2india.com/Images/places/GTK/Attractions/EMG_1.jpg'
  }
};

  // Build timeline
  const timeline = document.getElementById('timeline');
  if (timeline) {
    timelineData.forEach((t, i) => {
      const row = document.createElement('div');
      row.className = 'tl-item';
      row.innerHTML = `
        <div class="tl-year">${t.year}</div>
        <div class="tl-card left"><h3>${t.title}</h3><p>${t.desc}</p></div>
        <div class="tl-card right"><h3>${t.title}</h3><p>${t.desc}</p></div>`;
      timeline.appendChild(row);
    });
  }

  // Build monastery grid
  const grid = document.getElementById('monasteryGrid');
  if (grid) {
    Object.entries(monasteries).forEach(([id, m]) => {
      const c = document.createElement('article');
      c.className = 'card';
      c.innerHTML = `
        <div class="img"><img src="https://source.unsplash.com/600x400/?monastery,temple,buddhist,sikkim&sig=${id}" alt="${m.name}"></div>
        <div class="body">
          <h3>${m.name}</h3>
          <p>${m.history.substring(0, 150)}...</p>
          <p>
            <button class="btn primary" style="margin-right: 8px;">View Manuscripts & History</button>
            <a class="btn" href="#" data-tab="virtual" style="border:1px solid #667eea;color:#667eea;background:#fff;"><i class="fa-solid fa-vr-cardboard"></i> 360° Tour</a>
          </p>
        </div>`;
      
      c.querySelector('button').onclick = () => openMonasteryModal(m);
      grid.appendChild(c);
    });
  }

 function openMonasteryModal(m) {
  const modal = document.getElementById('monoModal');
  modal.classList.add('show');
  document.getElementById('monoTitle').textContent = m.name;
  
  // This is where you insert the image
  const monoBody = document.getElementById('monoBody');
  monoBody.innerHTML = `<img src="${m.image}" alt="${m.name}" style="width: 100%; border-radius: 12px; margin-bottom: 16px;">
                        <p>${m.history}</p>`;
  
  const manuGrid = document.getElementById('manuGrid'); 
  manuGrid.innerHTML = '';
  m.manuscripts.forEach(x => {
    const d = document.createElement('div'); 
    d.className = 'pill'; 
    d.innerHTML = `<i class="fa-solid fa-scroll"></i> ${x}`;
    manuGrid.appendChild(d);
  });
  
  const artiGrid = document.getElementById('artiGrid'); 
  artiGrid.innerHTML = '';
  m.artifacts.forEach(x => {
    const d = document.createElement('div'); 
    d.className = 'pill'; 
    d.innerHTML = `<i class="fa-solid fa-gem"></i> ${x}`;
    artiGrid.appendChild(d);
  });
}
}

// Find the initializeModals function
function initializeModals() {
    // ... existing modal closing logic ...

    // ADD THIS NEW BLOCK:
    const adventureCards = document.querySelectorAll('#adventureGrid .card');
    const adventureModal = document.getElementById('adventureModal');
    const adventureModalTitle = document.getElementById('adventureModalTitle');
    const adventureModalImage = document.getElementById('adventureModalImage');
    const adventureModalDesc = document.getElementById('adventureModalDesc');

    adventureCards.forEach(card => {
        card.addEventListener('click', () => {
            const cardId = card.id;
            const info = adventureInfo[cardId];

            if (info) {
                adventureModalTitle.textContent = info.title;
                adventureModalImage.src = info.image;
                adventureModalImage.alt = info.title;
                adventureModalDesc.textContent = info.description;
                adventureModal.classList.add('show');
            }
        });
    });

    // Close buttons for the new modal
    document.querySelectorAll('[data-close="adventureModal"]').forEach(btn => {
        btn.addEventListener('click', () => {
            adventureModal.classList.remove('show');
        });
    });
    
    // Click outside to close for the new modal
    if (adventureModal) {
      adventureModal.addEventListener('click', (e) => {
        if (e.target === adventureModal) {
            adventureModal.classList.remove('show');
        }
      });
    }

}