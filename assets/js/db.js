class Song {
   constructor(id, name, artist, image, type = 'mp3') {
      this.id = id;
      this.name = name;
      this.artist = artist;
      this.image = image;
      this.type = type;
      this.path = `./assets/music/song (${this.id}).${this.type}`;
   }
}

let songs = [
   new Song(1, 'Dance Monkey', 'Tones And I',  'https://i1.sndcdn.com/artworks-000657163909-ebr1wn-t500x500.jpg'),
   new Song(2, 'Database', 'MAN WITH A MISSION',  'https://images.rapgenius.com/cda2d9f88b29a2a02b739cb7b0d70c7a.500x496x1.jpg'),
   new Song(3, 'Demons', 'Imagine Dragons',  'https://pic.pimg.tw/aerirabbit/1530445328-192728815_n.jpg'),
   new Song(4, 'Elastic Heart', 'Sia',  'https://i1.sndcdn.com/artworks-000105586704-eoych8-t500x500.jpg'),
   new Song(5, 'Glad You Came', 'The Wanted',  'https://i1.sndcdn.com/artworks-000096178748-5444xw-t500x500.jpg'),
   new Song(6, 'Hall Of Fame', 'The Script',  'https://m.media-amazon.com/images/I/71VRzsP3CvL._SS500_.jpg'),
   new Song(7, 'Hymn For The Weekend', 'Tones And I',  'https://i1.sndcdn.com/artworks-000233607857-fw43by-t500x500.jpg'),
   new Song(8, 'Ikanaide', 'Eve', 'https://i1.sndcdn.com/artworks-Nue9ccWwYVc1ULiF-Ode9DA-t500x500.jpg'),
   new Song(9, 'In The End', 'Linkin Park', 'https://cdns-images.dzcdn.net/images/cover/033a271b5ec10842c287827c39244fb5/350x350.jpg'),
   new Song(10, 'Monsters', 'Katie Sky', 'https://images.shazam.com/coverart/t481943709_s400.jpg'),
   new Song(11, 'New Divide', 'Linkin Park', 'https://cdns-images.dzcdn.net/images/cover/033a271b5ec10842c287827c39244fb5/350x350.jpg'),
   new Song(12, 'Rise Up - Nightcore', 'TheFatRat', 'https://i1.sndcdn.com/artworks-FiatWJxiH6AWzuuE-8TlXDA-t500x500.jpg'),
   new Song(13, 'Umbrella - Nightcore', 'Rihanna', 'https://i.ytimg.com/vi/pFOinFPctHs/maxresdefault.jpg'),
   new Song(14, 'Numb', 'Linkin Park', 'https://i1.sndcdn.com/artworks-000482183808-s7h0nx-t500x500.jpg'),
   new Song(15, 'Raise your flag', 'MAN WITH A MISSION', 'https://stat.ameba.jp/user_images/20151105/02/endofnow/1c/1f/j/o0480048013474805776.jpg'),
   new Song(16, 'Samurai', 'Rameses B', 'https://www.reviewofreligions.org/wp-content/uploads/2021/01/samurai-warrior-smalll-shutterstock_1345891196-1024x1024.jpeg'),
   new Song(17, 'Timeless', 'Rameses B', 'https://s.mxmcdn.net/images-storage/albums/8/2/9/3/5/3/27353928_800_800.jpg'),
   new Song(18, 'Rightfully', 'Mili', 'https://c-cl.cdn.smule.com/rs-s95/arr/55/d5/7184823f-4a86-4460-a16a-5196c4abb58e.jpg'),
   new Song(19, 'Senbonzakura', 'Hatsune Miku', 'https://lastfm.freetls.fastly.net/i/u/500x500/681e532b16f70a301889ea006f2ba8cb.jpg'),
   new Song(20, 'Reality', 'Lost Frequencies', 'https://i.scdn.co/image/ab67616d0000b273509a6f6e25544687edcf7740'),
   new Song(21, 'Sweet But Psycho', 'Ava Max', 'https://res.cloudinary.com/teepublic/image/private/s--b9HhHMyA--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_000000,e_outline:48/co_000000,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1588357628/production/designs/9694392_0.jpg'),
   new Song(22, 'The Greatest', 'Sia', 'https://i1.sndcdn.com/artworks-000218048532-2x2bux-t500x500.jpg'),
   new Song(23, 'Titanium', 'Sia', 'https://upload.wikimedia.org/wikipedia/en/1/1d/Titaniumsong.jpg'),
   new Song(24, 'Unstoppable', 'Sia', 'https://lastfm.freetls.fastly.net/i/u/770x0/6d9dbb87540cd15becb5cd2e932a10cf.jpg'),
   new Song(25, 'Vitamins', 'Mili', 'https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/52/2a/11/522a118f-7648-c8f4-41cf-78ef6e29ef4f/859754641652_cover.jpg/400x400cc.jpg'),
   new Song(26, 'What I\'ve Done', 'Linkin Park', 'https://i1.sndcdn.com/artworks-000155790261-9wna6p-t500x500.jpg'),
   new Song(27, 'A Turtle\'s Heart', 'Mili', 'https://f4.bcbits.com/img/a4275075902_10.jpg'),
   new Song(28, 'Vacation', 'Damon Empero', 'https://direct.rhapsody.com/imageserver/images/alb.264233817/600x600.jpg'),
   new Song(29, 'Melody', 'Lost Frequencies', 'https://m.media-amazon.com/images/I/91jiuD81e3L._SS500_.jpg', 'm4a'),
   new Song(30, 'Nevada', 'Vicetone', 'https://i1.sndcdn.com/artworks-000174788935-d1hrl9-t500x500.jpg', 'm4a'),
   new Song(31, 'Time', 'Syn Cole', 'https://geo-media.beatport.com/image_size/1400x1400/b1fa975d-7b22-443b-8002-e398a5cc46a2.jpg'),
];

export default songs;