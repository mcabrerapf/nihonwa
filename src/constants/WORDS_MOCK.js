const WORDS_MOCK = [{
  id: '1084c46d-b701-4ee1-ae02-b06662d147d9', jp: '七', en: ['Seven'], furi: ['なな'], notes: [], tags: ['noun', 'kanji'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.745Z', updatedAt: '2024-01-24T17:01:09.509Z',
}, {
  id: 'f97cafa6-7c36-435c-b1f5-a1d8bdbfc4e4', jp: 'デパート', en: ['Department store'], furi: [], notes: [], tags: ['katakana', 'place'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.783Z', updatedAt: '2024-01-26T22:05:58.395Z',
}, {
  id: '9998a735-05aa-4d5b-bd9b-7ade990c3007', jp: '二', en: ['Two'], furi: ['に'], notes: [], tags: ['noun', 'kanji'], hits: 2, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.771Z', updatedAt: '2024-02-03T11:44:36.228Z',
}, {
  id: '34f51d9e-b7e9-457a-8b19-ea7736c6b436', jp: 'まだ', en: ['Still', 'Yet', 'Too'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-02-03T21:40:29.202Z', updatedAt: '2024-02-03T21:40:29.202Z',
}, {
  id: 'ed95a10e-a62a-41d4-acef-02f0de267382', jp: 'れいぞうこ', en: ['Fridge'], furi: [], notes: [], tags: ['tech', 'thing', 'noun'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-02-03T22:14:17.977Z', updatedAt: '2024-02-03T22:14:17.977Z',
}, {
  id: '211b39ba-38f6-47c7-b043-22530226e924', jp: '食べます', en: ['Eats'], furi: ['た'], notes: [], tags: ['food', 'verb', 'kanji'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.763Z', updatedAt: '2024-01-30T11:48:11.065Z',
}, {
  id: '27754660-8bbd-40c6-b41e-7a77eec1ac0a', jp: 'いいえ', en: ['No'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.715Z', updatedAt: '2024-01-24T17:01:09.141Z',
}, {
  id: 'd0dd3038-20c0-40d2-a1b3-21dc093c0f97', jp: 'さん', en: ['Mr', 'Miss', 'Mrs'], furi: [], notes: [], tags: ['formality', 'other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.689Z', updatedAt: '2024-01-24T17:01:09.254Z',
}, {
  id: '6731b6cc-5698-4cee-9b84-a076af43a004', jp: 'こんにちは', en: ['Hello'], furi: [], notes: [], tags: ['other', 'formality'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.761Z', updatedAt: '2024-01-26T22:17:50.789Z',
}, {
  id: '3e2f8649-217b-48eb-8294-4c09c30775df', jp: 'はじめまして', en: ['Nice to meet you'], furi: [], notes: [], tags: ['other', 'formality'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.703Z', updatedAt: '2024-01-26T22:17:36.155Z',
}, {
  id: 'ba95e6a1-bc61-4859-b5e3-109494d0dffb', jp: 'どうぞよろしく', en: ['Nice to meet you'], furi: [], notes: [], tags: ['other', 'formality'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.689Z', updatedAt: '2024-01-26T22:17:30.447Z',
}, {
  id: '5c94d121-d12c-4d12-8d83-acce514c4f39', jp: 'えいが', en: ['Movies'], furi: [], notes: [], tags: ['entertainment', 'noun'], hits: 3, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.747Z', updatedAt: '2024-02-03T12:23:44.499Z',
}, {
  id: '10e8d5a0-433c-41e9-b2c2-a11957abde2a', jp: 'ひるごはん', en: ['Lunch'], furi: [], notes: [], tags: ['food', 'noun'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.764Z', updatedAt: '2024-01-24T17:01:09.129Z',
}, {
  id: '2e6bb07f-4309-4e4f-acae-0edccb9f5387', jp: 'かいしゃいん', en: ['Office worker'], furi: [], notes: [], tags: ['occupation', 'person', 'noun'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.755Z', updatedAt: '2024-01-24T17:01:09.127Z',
}, {
  id: '9be59946-9652-4414-9eea-40e6484db127', jp: 'むすこ', en: ['Son'], furi: [], notes: [], tags: ['person', 'family', 'noun'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.762Z', updatedAt: '2024-01-24T17:01:09.135Z',
}, {
  id: '0ccb9625-42c3-4ddc-ae3a-ca32284cb13b', jp: 'ようこそ', en: ['Welcome'], furi: [], notes: [], tags: ['formality', 'other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.693Z', updatedAt: '2024-01-24T17:01:09.449Z',
}, {
  id: '6407c5a6-3657-46ef-8eb6-5ad75a2cb38f', jp: 'はい', en: ['Yes'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.748Z', updatedAt: '2024-01-24T17:01:09.125Z',
}, {
  id: '90e33415-4180-4f12-b9e7-9578b691a9bc', jp: 'えき', en: ['Station(s)', 'Train station(s)'], furi: [], notes: [], tags: ['transport', 'noun'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.771Z', updatedAt: '2024-01-24T17:01:09.113Z',
}, {
  id: 'b8fd3037-cf90-485a-9a45-72210a55fb84', jp: 'あおい', en: ['Blue'], furi: [], notes: [], tags: ['noun'], hits: 2, misses: 1, difficulty: 1, createdAt: '2024-01-22T19:59:29.795Z', updatedAt: '2024-02-03T12:02:09.876Z',
}, {
  id: '229d88a5-c069-44df-b8f0-8251ff9f025c', jp: 'うどん', en: ['Udon'], furi: [], notes: [], tags: ['food'], hits: 2, misses: 1, difficulty: 1, createdAt: '2024-01-23T15:44:52.647Z', updatedAt: '2024-02-03T12:25:10.437Z',
}, {
  id: '0dcc885a-1f89-4732-a598-db5c5a511e56', jp: 'べんごし', en: ['Lawyer(s)'], furi: [], notes: [], tags: ['occupation', 'noun'], hits: 2, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.752Z', updatedAt: '2024-02-03T12:03:33.566Z',
}, {
  id: '912c8c7b-3254-4b9d-a2f4-720b6b27a30b', jp: 'そば', en: ['Soba noodles'], furi: [], notes: [], tags: ['food'], hits: 2, misses: 1, difficulty: 1, createdAt: '2024-01-23T22:51:41.689Z', updatedAt: '2024-02-03T12:02:40.435Z',
}, {
  id: 'ff773ab0-0c25-418c-b20a-a6bbbe63958f', jp: 'しゅみ', en: ['Hobby'], furi: [], notes: [], tags: ['noun'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-02-01T20:18:03.339Z', updatedAt: '2024-02-01T20:18:03.339Z',
}, {
  id: '02a5cf27-0dc4-4ace-986e-5e4d76b56d1c', jp: '新聞', en: ['Newspaper'], furi: ['しん', 'ぶん'], notes: [], tags: ['kanji', 'entertainment'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-30T11:51:19.524Z', updatedAt: '2024-01-30T11:51:19.524Z',
}, {
  id: '7fe67922-a899-4f2a-ac54-94ab4ec9aa2e', jp: '高い', en: ['Expensive', 'Big', 'Tall'], furi: ['たか'], notes: [], tags: ['adjective', 'kanji'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-22T20:48:53.652Z', updatedAt: '2024-01-29T14:21:30.518Z',
}, {
  id: '91e48413-9bae-4774-bfe1-daae8815eb4a', jp: 'あそびます', en: ['Hang out'], furi: [], notes: [], tags: ['verb'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-24T22:07:55.494Z', updatedAt: '2024-02-01T08:29:24.247Z',
}, {
  id: 'dcb4cf11-1cf7-4da3-9896-676587a1bbea', jp: 'はしります', en: ['Run'], furi: [], notes: [], tags: ['verb'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-30T23:10:10.768Z', updatedAt: '2024-01-30T23:10:10.768Z',
}, {
  id: '731d5f75-c643-406a-90f9-c6f4a487488b', jp: 'およぎます', en: ['Swims'], furi: [], notes: [], tags: ['verb'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-24T12:33:05.083Z', updatedAt: '2024-01-24T17:01:09.253Z',
}, {
  id: '37c2e556-536e-4fd8-aae5-6e08c42b5ffd', jp: 'ジュース', en: ['Juice'], furi: [], notes: [], tags: ['food', 'thing', 'katakana'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.803Z', updatedAt: '2024-01-27T00:00:31.229Z',
}, {
  id: '28e16655-184c-4a34-b528-ccd475177076', jp: 'メール', en: ['Email'], furi: [], notes: [], tags: ['verb', 'tech'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-30T22:59:33.384Z', updatedAt: '2024-02-01T08:51:16.596Z',
}, {
  id: 'abc96dc4-3dc1-4a65-8cda-9e6ce0d835df', jp: '買います', en: ['Purchase'], furi: ['か'], notes: [], tags: ['kanji', 'verb'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-25T22:05:22.236Z', updatedAt: '2024-01-25T23:40:06.205Z',
}, {
  id: '320e347f-6030-4683-9a4d-3f4110fe3e86', jp: 'ありません', en: ['We dont have', 'There wont be (a)', 'There isnt (any)', 'There is not (a)'], furi: [], notes: [], tags: ['other', 'verb'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-27T09:23:25.335Z', updatedAt: '2024-02-01T08:26:53.756Z',
}, {
  id: 'e5190231-bd8e-48e1-ac5d-513d50e61e43', jp: '何時に', en: ['What time'], furi: ['なん', 'じ'], notes: [], tags: ['time', 'kanji'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-31T22:04:48.869Z', updatedAt: '2024-01-31T22:06:15.095Z',
}, {
  id: '209d7252-2b90-492d-8413-46c6af51ae33', jp: 'ベトナム', en: ['Vietnam'], furi: [], notes: [], tags: ['katakana', 'country'], hits: 2, misses: 1, difficulty: 1, createdAt: '2024-01-31T22:52:24.443Z', updatedAt: '2024-02-03T12:04:19.875Z',
}, {
  id: '0ed7e7a6-9186-4e29-ac6c-32c800284f38', jp: '父', en: ['Dad'], furi: ['ちち'], notes: [], tags: ['person', 'family', 'noun', 'kanji'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.746Z', updatedAt: '2024-01-24T17:01:09.123Z',
}, {
  id: 'ecd13735-6fd7-42c1-91d8-f93c9ffd2e56', jp: 'おちゃ', en: ['Green tea', 'Tea'], furi: [], notes: [], tags: ['noun', 'food'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.762Z', updatedAt: '2024-01-27T00:01:01.825Z',
}, {
  id: '0261d1bc-3e35-4163-aaad-10290ed1a7ef', jp: 'ジャケット', en: ['Jacket'], furi: [], notes: [], tags: ['clothes', 'noun', 'katakana'], hits: 3, misses: 1, difficulty: 1, createdAt: '2024-01-22T20:42:50.329Z', updatedAt: '2024-02-03T12:03:09.091Z',
}, {
  id: '285b4b05-48df-4faf-ad2e-1f698e6ac78c', jp: 'します', en: ['Plays', 'Does'], furi: [], notes: [], tags: ['verb', 'entertainment'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.761Z', updatedAt: '2024-01-26T22:16:56.228Z',
}, {
  id: 'b908c3bf-7c26-4fb1-8101-34d39c4f2ee7', jp: '九', en: ['Nine'], furi: ['きゅう'], notes: [], tags: ['noun', 'kanji'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.744Z', updatedAt: '2024-01-24T17:01:09.129Z',
}, {
  id: 'a3b2fe91-f680-4646-b189-0f1eeab01601', jp: 'アパート', en: ['Apartment'], furi: [], notes: [], tags: ['katakana', 'place', 'noun'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-02-03T21:39:22.935Z', updatedAt: '2024-02-03T21:39:22.935Z',
}, {
  id: '298d0fd1-b912-4702-b1cc-066572a1cc27', jp: '田中', en: ['Tanaka last name'], furi: ['た', 'なか'], notes: [], tags: ['person', 'noun', 'kanji'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.755Z', updatedAt: '2024-01-24T17:01:09.397Z',
}, {
  id: 'f240a065-9e99-4cbb-b6e0-1402f25f3be1', jp: 'いえ', en: ['House'], furi: [], notes: [], tags: ['noun', 'place'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-02-03T21:35:56.907Z', updatedAt: '2024-02-03T21:35:56.907Z',
}, {
  id: '89b60e55-8af0-4fa3-90b9-25752c598933', jp: 'じゃあね', en: ['Bye'], furi: [], notes: [], tags: ['other', 'formality'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.757Z', updatedAt: '2024-01-26T22:17:46.437Z',
}, {
  id: 'df6abe01-e1b3-467d-9575-59cb39bcdecb', jp: 'キッチン', en: ['Kitchen'], furi: [], notes: [], tags: ['place', 'noun'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-02-03T21:43:54.293Z', updatedAt: '2024-02-03T21:43:54.293Z',
}, {
  id: '057f38cb-a4d7-439e-88a6-12c4309d023d', jp: 'ニューヨーク', en: ['New York'], furi: [], notes: [], tags: ['place', 'katakana'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.777Z', updatedAt: '2024-01-26T21:50:23.148Z',
}, {
  id: '2f87e59b-f1e7-4fd8-95c8-a7c887a94835', jp: 'じん', en: ['Nationality'], furi: [], notes: [], tags: ['person', 'other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.737Z', updatedAt: '2024-01-24T17:01:09.119Z',
}, {
  id: '6ff83dc5-8c81-46a7-9abc-cba57fd18bc8', jp: 'その', en: ['The', 'That', 'Its'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.749Z', updatedAt: '2024-01-24T17:01:09.354Z',
}, {
  id: 'ba7e5cd5-8e44-4620-bc21-f57c2fc78bf6', jp: 'ふたつ', en: ['Two', 'Two of something'], furi: [], notes: [], tags: ['other'], hits: 2, misses: 1, difficulty: 1, createdAt: '2024-01-23T15:59:15.261Z', updatedAt: '2024-02-03T12:02:40.421Z',
}, {
  id: 'e7b6d37d-5e75-4c7d-a0c7-2a8f1c001f05', jp: 'バレーボール', en: ['Volleyball'], furi: [], notes: [], tags: ['katakana', 'sport'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-30T21:38:29.532Z', updatedAt: '2024-01-30T21:38:29.532Z',
}, {
  id: 'e64ab922-3bfa-4958-8c02-9a53be40719a', jp: 'は', en: ['Is', 'With', 'Regarding'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.708Z', updatedAt: '2024-02-01T08:39:57.560Z',
}, {
  id: '857a1650-5e96-499e-8a66-cf6b4e823747', jp: 'さい', en: ['Years old', '(n) of age'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.773Z', updatedAt: '2024-01-24T17:01:09.252Z',
}, {
  id: '7d039e1b-b9a4-4350-816c-7f18cc6cf3a1', jp: '百', en: ['Hundred'], furi: ['ひゃく'], notes: [], tags: ['other', 'kanji'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-22T20:29:33.090Z', updatedAt: '2024-01-24T17:01:09.124Z',
}, {
  id: 'a67cca6e-6edf-412b-9aaa-87026125f058', jp: 'コインロッカー', en: ['Locker'], furi: [], notes: [], tags: ['place', 'thing', 'katakana'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-27T22:04:34.452Z', updatedAt: '2024-02-01T08:47:04.120Z',
}, {
  id: '8e81f5df-225e-4dfe-93ee-e2098fefb052', jp: 'ばんごはん', en: ['Dinner'], furi: [], notes: [], tags: ['food', 'noun'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.746Z', updatedAt: '2024-01-24T17:01:09.129Z',
}, {
  id: 'e307c974-b154-4b3a-863f-db6130109f20', jp: 'ごはん', en: ['Rice', 'Meal(s)'], furi: [], notes: [], tags: ['food', 'noun'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.750Z', updatedAt: '2024-01-24T17:01:09.133Z',
}, {
  id: '6c760516-5f4c-4d17-a2ae-103ed50cba8d', jp: 'とし', en: ['City'], furi: [], notes: [], tags: ['place', 'noun'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.733Z', updatedAt: '2024-01-24T17:01:09.355Z',
}, {
  id: '4ced07fc-9b2a-4d15-b20b-3960851f2539', jp: 'いくら', en: ['How (much)'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-22T20:35:17.787Z', updatedAt: '2024-01-24T17:01:09.119Z',
}, {
  id: '6b9e6559-b4b6-4a95-9858-3dc42aee2777', jp: 'がくせい', en: ['Student(s)'], furi: [], notes: [], tags: ['school', 'person', 'occupation', 'noun'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.756Z', updatedAt: '2024-01-24T17:01:09.127Z',
}, {
  id: '3668620e-021e-49f3-bf27-cf91f7b28fbe', jp: 'じゅうどう', en: ['Judo'], furi: [], notes: [], tags: ['sport'], hits: 2, misses: 1, difficulty: 1, createdAt: '2024-01-24T22:43:59.920Z', updatedAt: '2024-02-03T12:02:09.890Z',
}, {
  id: 'be701e6f-0d18-44d5-8e40-8d6aea8f943f', jp: '水', en: ['Water(s)'], furi: ['みず'], notes: [], tags: ['noun', 'kanji', 'food'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.762Z', updatedAt: '2024-01-27T00:00:49.765Z',
}, {
  id: 'efc057cb-e683-4fc7-8657-990867b00730', jp: 'ダサい', en: ['Hideous'], furi: [], notes: [], tags: ['katakana', 'adjective'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-22T19:24:43.837Z', updatedAt: '2024-01-24T17:01:09.130Z',
}, {
  id: 'e2b85087-2a89-427a-92a2-7a428b897924', jp: '時', en: ['o clock'], furi: ['じ'], notes: [], tags: ['time', 'kanji', 'other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.694Z', updatedAt: '2024-01-24T17:01:09.145Z',
}, {
  id: '6cf507ab-26fa-4d56-b00a-571b039ed71e', jp: 'にぎやか', en: ['Lively'], furi: [], notes: [], tags: ['adjective'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.762Z', updatedAt: '2024-01-24T17:01:09.226Z',
}, {
  id: '72d111a7-6f38-4bb6-9780-036377eb8821', jp: 'ドレス', en: ['Dress'], furi: [], notes: [], tags: ['clothes', 'noun', 'katakana'], hits: 2, misses: 1, difficulty: 1, createdAt: '2024-01-22T20:00:56.731Z', updatedAt: '2024-02-03T11:48:55.122Z',
}, {
  id: '7869d84a-dd79-4bc4-b535-eed7adcc53dd', jp: 'コンセント', en: ['Outlet'], furi: [], notes: [], tags: ['tech', 'katakana'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-27T21:48:07.631Z', updatedAt: '2024-02-01T08:47:23.144Z',
}, {
  id: 'e3d8bc51-9ff7-4ac5-8899-6ae47c6a3fbf', jp: 'おにぎり', en: ['Rice ball(s)'], furi: [], notes: [], tags: ['food'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T22:32:33.664Z', updatedAt: '2024-01-24T17:01:09.254Z',
}, {
  id: '57fcfeee-ed59-46b1-99fc-fe0a57a2bc94', jp: 'かさ', en: ['Umbrella'], furi: [], notes: [], tags: ['thing', 'noun'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.754Z', updatedAt: '2024-01-26T20:54:00.201Z',
}, {
  id: '8092d8eb-d614-4c43-9e64-45e94c82f503', jp: 'コンビニ', en: ['Convenience store'], furi: [], notes: [], tags: ['food', 'katakana', 'place'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.807Z', updatedAt: '2024-01-26T22:16:10.111Z',
}, {
  id: 'ffea1f28-8f5b-4e0e-9709-246eaa9a0598', jp: 'パン', en: ['Bread'], furi: [], notes: [], tags: ['food', 'thing', 'katakana'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.808Z', updatedAt: '2024-01-26T21:50:50.657Z',
}, {
  id: 'dd06b4bf-2b8b-4e61-808b-e076e4d4f9e0', jp: 'いつ', en: ['When', 'What time'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-02-03T22:16:22.983Z', updatedAt: '2024-02-03T22:16:22.983Z',
}, {
  id: '6e64cea5-f330-4ebc-9681-790bcd343e4c', jp: 'すてき', en: ['Lovely', 'Nice', 'Cute'], furi: [], notes: [], tags: ['adjective'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-22T20:04:27.460Z', updatedAt: '2024-01-24T17:01:09.356Z',
}, {
  id: '6b253c74-1084-4ffa-abfc-ccd503c2803a', jp: 'まんが', en: ['Manga'], furi: [], notes: [], tags: ['entertainment', 'noun'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.747Z', updatedAt: '2024-01-24T17:01:09.116Z',
}, {
  id: '3a48980b-99ce-4b5c-89c1-80c2756616d3', jp: 'ください', en: ['Please'], furi: [], notes: [], tags: ['formality', 'other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.745Z', updatedAt: '2024-01-24T17:01:09.133Z',
}, {
  id: 'e919a446-196b-41c7-93be-1576bb9f6167', jp: 'カレー', en: ['Curry'], furi: [], notes: [], tags: ['food', 'katakana'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.803Z', updatedAt: '2024-01-26T20:53:47.267Z',
}, {
  id: '4b0ae62c-d180-4dde-a53b-c3496132dce2', jp: 'まち', en: ['Town', 'Wait', 'City'], furi: [], notes: [], tags: ['place', 'noun'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.764Z', updatedAt: '2024-01-24T17:01:09.117Z',
}, {
  id: '50bab35d-1422-46b5-869a-5ce383e0b920', jp: '安い', en: ['Cheap', 'Inexpensive'], furi: ['やす'], notes: [], tags: ['adjective', 'kanji'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-22T20:32:36.956Z', updatedAt: '2024-01-29T14:26:18.606Z',
}, {
  id: 'eb86f514-4b95-4989-96e9-7ac58d7f4aee', jp: 'そこ', en: ['There'], furi: [], notes: [], tags: ['other', 'place'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.738Z', updatedAt: '2024-01-26T22:16:23.073Z',
}, {
  id: 'f6d5a5db-c417-4857-96b5-a6ad8d8f9e0b', jp: 'か', en: ['Is it?', 'That', 'Or'], furi: [], notes: ['Used at the end to ask something'], tags: ['other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.708Z', updatedAt: '2024-02-01T08:44:58.811Z',
}, {
  id: '5b26840e-b8fc-4954-8096-fcb64acc3dcb', jp: 'ごろ', en: ['Similar', 'Around', 'Like'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.631Z', updatedAt: '2024-01-30T21:41:15.875Z',
}, {
  id: 'efdbd2cb-6a66-4df2-96ec-f0f3b1495a0c', jp: 'ともだち', en: ['Friends'], furi: [], notes: [], tags: ['person'], hits: 2, misses: 1, difficulty: 1, createdAt: '2024-01-24T22:10:14.864Z', updatedAt: '2024-02-03T12:03:09.071Z',
}, {
  id: '46d05492-bd4b-4005-8b98-04738834b979', jp: 'アニメ', en: ['Anime'], furi: [], notes: [], tags: ['entertainment', 'katakana'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.881Z', updatedAt: '2024-01-26T19:35:21.267Z',
}, {
  id: '0dac89cc-60c9-4946-8bc7-66b9b294d12b', jp: '大きい', en: ['Big', 'Large'], furi: ['おお'], notes: [], tags: ['adjective', 'kanji'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.787Z', updatedAt: '2024-01-26T21:50:40.691Z',
}, {
  id: '5f97d5e9-c801-47ee-a2c6-5f85e6790250', jp: 'アメリカ', en: ['America'], furi: [], notes: [], tags: ['country', 'katakana'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.864Z', updatedAt: '2024-02-01T08:26:02.344Z',
}, {
  id: '5f6fa17c-0d2b-4ff1-a7cd-790d9c732e9f', jp: 'つま', en: ['Wife'], furi: [], notes: [], tags: ['person', 'family', 'noun'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.766Z', updatedAt: '2024-01-24T17:01:09.424Z',
}, {
  id: '9f960003-a7fb-48f6-91b7-d2f01f09e161', jp: 'カナダ', en: ['Canada'], furi: [], notes: [], tags: ['country', 'place', 'katakana'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.863Z', updatedAt: '2024-01-26T20:52:22.720Z',
}, {
  id: 'f684c73c-28de-4962-89d3-eae4e8ee8f84', jp: 'タクシー', en: ['Taxi'], furi: [], notes: [], tags: ['transport', 'katakana'], hits: 2, misses: 1, difficulty: 1, createdAt: '2024-01-27T21:41:04.000Z', updatedAt: '2024-02-03T12:04:19.841Z',
}, {
  id: '565ea497-0ad4-45d8-afb1-bdf9c49d8e56', jp: 'あれ', en: ['That over there', 'That (one) over there'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.736Z', updatedAt: '2024-01-24T17:01:09.129Z',
}, {
  id: '6717cb95-7623-4c60-8eef-47b630c969f0', jp: 'トロント', en: ['Toronto'], furi: [], notes: [], tags: ['place', 'katakana'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T10:05:45.487Z', updatedAt: '2024-02-01T09:00:01.665Z',
}, {
  id: 'a59f69a5-1dae-4adb-8421-2e5e05d54a80', jp: 'ブラジル', en: ['Brazil'], furi: [], notes: [], tags: ['country', 'katakana'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.792Z', updatedAt: '2024-02-01T08:31:05.361Z',
}, {
  id: '16d98f80-076f-43ac-a000-bdc9195b26b8', jp: 'どう', en: ['What about', 'How is'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.706Z', updatedAt: '2024-01-24T17:01:09.127Z',
}, {
  id: '41085d55-522d-422f-90a6-db3996b6b3bf', jp: '五', en: ['Five'], furi: ['ご'], notes: [], tags: ['noun', 'kanji'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.750Z', updatedAt: '2024-01-24T17:01:09.133Z',
}, {
  id: '66bdb294-0d80-4f0e-a2ea-7b99888499ef', jp: 'まいにち', en: ['Every day'], furi: [], notes: [], tags: ['time', 'other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.723Z', updatedAt: '2024-01-24T17:01:09.112Z',
}, {
  id: 'ce5526b5-6d4c-4342-9168-48808ba83d38', jp: 'コロンビア', en: ['Colombia'], furi: [], notes: [], tags: ['place', 'country', 'katakana'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-24T00:12:58.260Z', updatedAt: '2024-02-01T08:49:15.881Z',
}, {
  id: '42b9ce6f-224e-4332-96b5-9314063277e6', jp: 'やさしい', en: ['Kind', 'Easy', 'Nice'], furi: [], notes: [], tags: ['adjective'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.771Z', updatedAt: '2024-01-24T17:01:09.502Z',
}, {
  id: '9ea37b25-320f-48e2-a8ad-9eb55990264c', jp: 'おきます', en: ['Get up', 'Wake up'], furi: [], notes: [], tags: ['verb'], hits: 2, misses: 2, difficulty: 1, createdAt: '2024-01-30T11:52:33.513Z', updatedAt: '2024-02-03T12:26:26.120Z',
}, {
  id: 'be5a07f7-e6ab-49b7-9efd-028b8c424c01', jp: 'いもうと', en: ['Younger sister'], furi: [], notes: [], tags: ['person', 'family', 'noun'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.747Z', updatedAt: '2024-01-24T17:01:09.107Z',
}, {
  id: '9ef8ff1e-f2c1-4e94-93d5-afc925a77394', jp: '言います', en: ['Named', 'Called'], furi: ['い'], notes: [], tags: ['verb', 'kanji'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-31T22:41:03.298Z', updatedAt: '2024-02-01T00:34:30.573Z',
}, {
  id: '87b9e971-3434-450e-97e6-b6d586735cd7', jp: '話します', en: ['Speaks', 'Talks'], furi: ['はな'], notes: [], tags: ['kanji', 'verb'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-25T22:02:48.069Z', updatedAt: '2024-01-26T20:43:52.969Z',
}, {
  id: 'a07dbc07-bb0d-4b7b-896c-2c008455b344', jp: 'からて', en: ['Karate'], furi: [], notes: [], tags: ['sport'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-24T22:30:40.768Z', updatedAt: '2024-01-24T22:30:40.768Z',
}, {
  id: '325598a6-59a1-4dd8-b4fb-6e9a8a354be4', jp: 'ラーメン', en: ['Ramen'], furi: [], notes: [], tags: ['food', 'katakana'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.866Z', updatedAt: '2024-01-26T21:51:35.985Z',
}, {
  id: '27a4a2e7-68e0-4597-a122-c4ec01c37904', jp: 'に', en: ['To', 'In', 'As (a)', 'At'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.741Z', updatedAt: '2024-02-01T08:52:10.181Z',
}, {
  id: '3b46fb3c-52b0-4754-9c2b-f0b24ed59054', jp: '母', en: ['Mom'], furi: ['はは'], notes: [], tags: ['person', 'family', 'noun', 'kanji'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.755Z', updatedAt: '2024-01-24T17:01:09.117Z',
}, {
  id: 'b29387f2-5392-4c59-9c18-69f750859a53', jp: 'だいがくせい', en: ['College student(s)'], furi: [], notes: [], tags: ['school', 'occupation', 'person', 'noun'], hits: 2, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.750Z', updatedAt: '2024-02-03T12:03:33.523Z',
}, {
  id: '69773bfd-7c66-4b13-950a-f1cc8c57ba66', jp: 'スマホ', en: ['Smartphone'], furi: [], notes: [], tags: ['tech', 'thing', 'katakana'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.781Z', updatedAt: '2024-01-26T21:52:06.468Z',
}, {
  id: 'c368a4c2-1b01-4ecd-a63c-88b7ead56c0c', jp: 'シャワ', en: ['Shower'], furi: [], notes: [], tags: ['katakana', 'noun', 'place'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-30T23:01:49.827Z', updatedAt: '2024-02-01T08:56:32.869Z',
}, {
  id: '17c15026-a304-40e3-8f5c-2b563e6295f3', jp: 'ほんだな', en: ['Bookshelf'], furi: [], notes: [], tags: ['noun', 'thing'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-02-03T21:57:49.343Z', updatedAt: '2024-02-03T21:57:49.343Z',
}, {
  id: '37e2aeff-4984-4dae-8337-b5da6349ce16', jp: 'ホーム', en: ['Platforms'], furi: [], notes: [], tags: ['transport', 'other', 'katakana'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-26T00:03:12.144Z', updatedAt: '2024-01-26T20:44:50.045Z',
}, {
  id: '53fb547b-0b3c-4e8e-b481-be5471d71d5a', jp: '読みます', en: ['Read', 'Check'], furi: ['よ'], notes: [], tags: ['verb', 'kanji', 'entertainment'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.765Z', updatedAt: '2024-01-30T23:00:04.141Z',
}, {
  id: 'be6bcadb-bf60-4f5d-9004-3ceb482f8564', jp: '小さい', en: ['Small', 'Little'], furi: ['ちい'], notes: [], tags: ['adjective', 'kanji'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.827Z', updatedAt: '2024-01-26T20:27:40.076Z',
}, {
  id: '48338f1d-dfc4-4b59-b30e-fd710312ee7d', jp: 'がほしいです', en: ['Want'], furi: [], notes: [], tags: ['noun', 'verb'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-22T19:54:12.782Z', updatedAt: '2024-01-24T17:01:09.128Z',
}, {
  id: 'efcb173e-9456-4a82-bc9f-dc4ed3e99e31', jp: 'しゅっしん', en: ['Being from', 'Is from'], furi: [], notes: [], tags: ['other', 'place'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.731Z', updatedAt: '2024-01-26T22:16:16.110Z',
}, {
  id: 'e5f94bee-5d65-4e4c-bc61-bb3ae134fdb8', jp: 'ネクタイ', en: ['Necktie'], furi: [], notes: [], tags: ['clothes', 'katakana'], hits: 2, misses: 1, difficulty: 1, createdAt: '2024-01-22T20:31:08.196Z', updatedAt: '2024-02-03T11:48:55.121Z',
}, {
  id: '700a6adc-a23e-42b3-8ede-f76ddeb87dff', jp: 'ちかい', en: ['Close', 'Near'], furi: [], notes: [], tags: ['place', 'other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-27T21:55:43.427Z', updatedAt: '2024-01-27T21:55:43.427Z',
}, {
  id: '3de9b8a5-64ac-4082-8b44-0c3aa7841188', jp: 'まいしゅう', en: ['Every week'], furi: [], notes: [], tags: ['time'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-30T21:39:31.825Z', updatedAt: '2024-01-30T21:39:31.825Z',
}, {
  id: 'df0e2a71-bed2-455c-ab8d-bdd391a1e583', jp: 'でんしレンジ', en: ['Microwave'], furi: [], notes: [], tags: ['noun', 'katakana', 'tech'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-02-03T22:10:48.602Z', updatedAt: '2024-02-03T22:10:48.602Z',
}, {
  id: 'e23d5abd-97a3-4b76-9283-4dac8181c8a6', jp: 'サンドイッチ', en: ['Sandwich'], furi: [], notes: [], tags: ['food', 'thing', 'katakana'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.804Z', updatedAt: '2024-01-26T21:52:13.360Z',
}, {
  id: '278403db-6755-4ad0-87f0-36b09529d675', jp: 'ちょっと', en: ['I dont really like', 'Doesnt work very well'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-22T19:31:51.115Z', updatedAt: '2024-01-24T17:01:09.114Z',
}, {
  id: '6dfd0b5f-523b-42b0-99a9-cc494ebf978a', jp: 'ふく', en: ['Clothes'], furi: [], notes: [], tags: ['clothes', 'thing', 'noun'], hits: 2, misses: 1, difficulty: 1, createdAt: '2024-01-22T19:25:36.068Z', updatedAt: '2024-02-03T11:47:05.638Z',
}, {
  id: '78d779db-1fa8-4893-afe0-3b2824fded2c', jp: 'おとうと', en: ['Younger brother'], furi: [], notes: [], tags: ['person', 'family', 'noun'], hits: 2, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.774Z', updatedAt: '2024-02-03T12:03:33.501Z',
}, {
  id: 'c1a7cbb0-c634-4824-b3f0-90466416ff80', jp: 'すみません', en: ['Excuse me', 'Sorry'], furi: [], notes: [], tags: ['formality', 'other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.721Z', updatedAt: '2024-01-27T09:20:53.962Z',
}, {
  id: '64b40246-8002-42dd-a69e-97ad48c6973b', jp: 'ね', en: ['Isnt it'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-22T21:29:21.645Z', updatedAt: '2024-01-24T17:01:09.263Z',
}, {
  id: '06402f33-41da-4c3d-b801-10575d205737', jp: 'かんこく', en: ['Korea'], furi: [], notes: [], tags: ['country'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-31T22:50:46.344Z', updatedAt: '2024-01-31T22:50:46.344Z',
}, {
  id: '094ea927-6831-449c-9210-afd43ae218b4', jp: 'ファンタシー', en: ['Fantasy'], furi: [], notes: [], tags: ['katakana', 'entertainment'], hits: 2, misses: 1, difficulty: 1, createdAt: '2024-02-01T20:33:31.263Z', updatedAt: '2024-02-03T12:03:09.101Z',
}, {
  id: 'fd2353eb-98d3-42b6-8b62-a1f4b1fb1d9e', jp: 'あの', en: ['That, those (over there)'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-22T20:02:24.431Z', updatedAt: '2024-01-24T17:01:09.138Z',
}, {
  id: 'e1df100b-3c05-45f4-8c82-35d0a520f991', jp: 'ひっこします', en: ['Move'], furi: [], notes: [], tags: ['verb'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-02-03T21:37:01.279Z', updatedAt: '2024-02-03T21:37:01.279Z',
}, {
  id: '29a14fc7-4695-431b-9e34-94cf25395996', jp: 'こうちゃ', en: ['Black tea'], furi: [], notes: [], tags: ['food'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T22:56:28.717Z', updatedAt: '2024-01-27T00:00:44.339Z',
}, {
  id: '89d1bb64-fabd-4168-8954-2499139d5107', jp: 'Kポップ', en: ['Kpop'], furi: [], notes: [], tags: ['entertainment', 'katakana'], hits: 2, misses: 1, difficulty: 1, createdAt: '2024-02-01T20:22:10.316Z', updatedAt: '2024-02-03T12:24:57.894Z',
}, {
  id: '781eb568-9bd9-434a-946d-3e774c22ce70', jp: 'ちゅうごく', en: ['China'], furi: [], notes: [], tags: ['country'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-31T22:53:56.307Z', updatedAt: '2024-01-31T22:53:56.307Z',
}, {
  id: '1e78a9a4-2e4f-4fb7-95fa-ad0df9376386', jp: '四', en: ['Four'], furi: ['よん'], notes: ['Can also be pronounced shi', 'But best avoid'], tags: ['noun', 'kanji'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.757Z', updatedAt: '2024-01-24T17:01:09.445Z',
}, {
  id: 'a045df57-bf12-4f96-86de-f5c9c498e23d', jp: 'こんしゅう', en: ['This week'], furi: [], notes: [], tags: ['time'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-02-03T22:17:40.901Z', updatedAt: '2024-02-03T22:17:40.901Z',
}, {
  id: '3205a408-4c1e-4fea-b48d-15ed97ddda8d', jp: 'すし', en: ['Sushi'], furi: [], notes: [], tags: ['food', 'noun'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.776Z', updatedAt: '2024-01-24T17:01:09.355Z',
}, {
  id: 'ce6a49dc-3614-4e42-a448-cac5df204f73', jp: 'ていしょく', en: ['Meal set(s)'], furi: [], notes: [], tags: ['food'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T15:49:42.452Z', updatedAt: '2024-01-24T17:01:09.392Z',
}, {
  id: 'beb724b9-aeaf-4f97-b55e-8b24c14ecf62', jp: 'ひと', en: ['Person', 'People'], furi: [], notes: [], tags: ['person', 'noun'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.757Z', updatedAt: '2024-01-24T17:01:09.141Z',
}, {
  id: '55aac1b4-869e-4c1c-95e9-cf0a5f4689df', jp: 'Tシャツ', en: ['T Shirt'], furi: [], notes: [], tags: ['clothes', 'noun', 'katakana'], hits: 2, misses: 1, difficulty: 1, createdAt: '2024-01-22T19:52:54.921Z', updatedAt: '2024-02-03T11:47:05.635Z',
}, {
  id: '32d14f4c-26cd-4a61-bcb0-6f04d212dfca', jp: 'コメディ', en: ['Comedy'], furi: [], notes: [], tags: ['entertainment', 'katakana'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-02-01T21:00:06.952Z', updatedAt: '2024-02-01T21:00:15.675Z',
}, {
  id: '2704e6fa-7541-4cd0-bdf0-5793e7eebbc5', jp: 'それ', en: ['That', 'That (one)'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.769Z', updatedAt: '2024-01-24T17:01:09.354Z',
}, {
  id: '4925710e-36f7-46ca-801a-151d285f4e32', jp: 'そうじき', en: ['Vacuum cleaner'], furi: [], notes: [], tags: ['tech', 'thing', 'noun'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-02-03T22:01:15.015Z', updatedAt: '2024-02-03T22:01:15.015Z',
}, {
  id: '23825f9e-7544-4337-bdc7-e937fc88320d', jp: 'リビング', en: ['Living room'], furi: [], notes: [], tags: ['katakana', 'place'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-02-03T21:46:24.418Z', updatedAt: '2024-02-03T21:46:24.418Z',
}, {
  id: '95f29275-eea8-4cdb-8eb2-1e63042610cc', jp: 'ひとり', en: ['One self'], furi: [], notes: [], tags: ['person', 'other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-24T12:34:37.361Z', updatedAt: '2024-01-24T17:01:09.130Z',
}, {
  id: 'c7dbb893-bc6d-49df-a332-8c01c23fa0a3', jp: 'まいばん', en: ['Every night'], furi: [], notes: [], tags: ['time', 'other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.730Z', updatedAt: '2024-01-24T17:01:09.136Z',
}, {
  id: '1a74947f-2614-481e-a302-f2c81641647b', jp: 'せまい', en: ['Cramped', 'Narrow', 'Small'], furi: [], notes: [], tags: ['adjective'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-02-03T21:44:30.330Z', updatedAt: '2024-02-03T21:44:30.330Z',
}, {
  id: '371deb34-a829-4443-b868-882e8ce9afac', jp: 'とおい', en: ['Far'], furi: [], notes: [], tags: ['other', 'place'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-27T21:49:05.770Z', updatedAt: '2024-01-27T21:49:05.770Z',
}, {
  id: 'bdf14a7c-b1b9-4db9-bb32-fef88c057114', jp: '九時', en: ['Nine o clock'], furi: ['く', 'じ'], notes: [], tags: ['time', 'number', 'kanji'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.688Z', updatedAt: '2024-02-01T08:49:34.759Z',
}, {
  id: '568a01db-6967-4128-98c2-4958285aba14', jp: 'かばん', en: ['Bag'], furi: [], notes: [], tags: ['thing', 'noun'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.767Z', updatedAt: '2024-01-24T17:01:09.122Z',
}, {
  id: 'dc294f50-7f29-4a18-ba0c-f78bc5c2bd72', jp: '半', en: ['Thirty', 'Half'], furi: ['はん'], notes: [], tags: ['time', 'kanji', 'other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.672Z', updatedAt: '2024-02-01T08:40:25.817Z',
}, {
  id: 'd20c4f52-ecd5-4d76-bc26-0fc6ab4e333f', jp: 'サラダ', en: ['Salad'], furi: [], notes: [], tags: ['food', 'katakana'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T22:46:48.571Z', updatedAt: '2024-02-01T08:55:47.722Z',
}, {
  id: 'e6b904f3-81f8-4a79-9820-f5ac1af0ddf3', jp: 'ドラマ', en: ['Drama'], furi: [], notes: [], tags: ['entertainment', 'katakana'], hits: 2, misses: 1, difficulty: 1, createdAt: '2024-01-24T22:04:54.733Z', updatedAt: '2024-02-03T12:04:19.877Z',
}, {
  id: 'a6b20847-c6fe-4ff6-a0f7-25fbec77d8f4', jp: 'どんな', en: ['What kind of', 'What sort of', 'Wht type of'], furi: [], notes: [], tags: ['formality'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-02-01T20:35:22.918Z', updatedAt: '2024-02-01T20:35:22.918Z',
}, {
  id: '9cc3f9ac-526e-4f88-9176-6f38623701bd', jp: 'よく', en: ['Often'], furi: [], notes: [], tags: ['adjective'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.753Z', updatedAt: '2024-01-24T17:01:09.502Z',
}, {
  id: 'e79442c6-561b-40a1-88e1-c8d64b66e633', jp: 'ケーキ', en: ['Cake'], furi: [], notes: [], tags: ['food', 'katakana'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.804Z', updatedAt: '2024-01-26T20:54:14.350Z',
}, {
  id: '7d699f57-214e-4c48-941e-4520cea84937', jp: 'あびます', en: ['Take'], furi: [], notes: [], tags: ['verb'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-30T23:02:18.493Z', updatedAt: '2024-01-30T23:02:18.493Z',
}, {
  id: '330342ce-28ce-4f29-a68c-c887846ed345', jp: 'いらっしゃいませ', en: ['Welcome'], furi: [], notes: [], tags: ['other', 'formality'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.735Z', updatedAt: '2024-01-26T22:17:42.212Z',
}, {
  id: '6745589b-9c8d-4d94-8c67-c6e17bd74900', jp: 'せんせい', en: ['Teacher(s)', 'Professor(s)'], furi: [], notes: [], tags: ['occupation', 'person', 'school', 'noun'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.775Z', updatedAt: '2024-01-24T17:01:09.279Z',
}, {
  id: '8ec07994-800c-426d-9144-dc9e2135b9d0', jp: 'べんとう', en: ['Boxed lunch'], furi: [], notes: [], tags: ['food', 'noun'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.748Z', updatedAt: '2024-01-24T17:01:09.113Z',
}, {
  id: '6b66b642-7008-46da-817b-123839ceb050', jp: 'ほんとうですか', en: ['Really?'], furi: [], notes: [], tags: ['formality'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-02-01T21:06:18.826Z', updatedAt: '2024-02-02T22:58:37.250Z',
}, {
  id: '9a0e9b01-0416-43e4-85bc-47c30ba81efa', jp: '日曜日', en: ['Sunday'], furi: ['にち', 'よう', 'び'], notes: [], tags: ['kanji'], hits: 2, misses: 1, difficulty: 1, createdAt: '2024-01-24T22:49:28.929Z', updatedAt: '2024-02-03T11:44:36.232Z',
}, {
  id: '23c8928f-e2be-4165-af0b-f96e2fd6347a', jp: 'あね', en: ['Older sister'], furi: [], notes: [], tags: ['person', 'family', 'noun'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.765Z', updatedAt: '2024-01-24T17:01:09.133Z',
}, {
  id: 'fe31a095-6f79-4112-a927-a86de051f60e', jp: 'テーブル', en: ['Table'], furi: [], notes: [], tags: ['katakana', 'noun', 'thing'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-02-03T22:05:47.596Z', updatedAt: '2024-02-03T22:05:47.596Z',
}, {
  id: 'c416bf83-8219-4204-8749-4c90ac4f8c84', jp: 'Jポップ', en: ['J pop'], furi: [], notes: [], tags: ['entertainment', 'katakana'], hits: 2, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.866Z', updatedAt: '2024-02-03T12:02:40.410Z',
}, {
  id: 'b9e4183c-3f42-46d7-bf2e-d9bf967d30c1', jp: 'いま', en: ['Now', 'Current'], furi: [], notes: [], tags: ['time', 'other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.732Z', updatedAt: '2024-01-24T17:01:09.097Z',
}, {
  id: '231537a8-d731-4cda-9d55-0cdda86c9726', jp: 'この', en: ['This'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.761Z', updatedAt: '2024-01-24T17:01:09.045Z',
}, {
  id: '8d1862e3-0871-4858-b030-03c6981a4119', jp: 'イギリス', en: ['England'], furi: [], notes: [], tags: ['country', 'place', 'katakana'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.812Z', updatedAt: '2024-01-26T20:45:22.171Z',
}, {
  id: '6dac6dda-ed2d-4284-ac6d-2c91338f37d4', jp: 'いそがしい', en: ['Busy'], furi: [], notes: [], tags: ['adjective'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.761Z', updatedAt: '2024-01-24T17:01:09.134Z',
}, {
  id: '174add89-b12b-40ce-aab4-ac2320aa7a42', jp: 'ちか', en: ['Underground level'], furi: [], notes: [], tags: ['place'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-27T21:42:21.001Z', updatedAt: '2024-01-27T21:42:21.001Z',
}, {
  id: '4463f69c-2850-4643-ae82-9d1e06ae9882', jp: 'エアコン', en: ['Air conditioner'], furi: [], notes: [], tags: ['noun', 'katakana', 'tech'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-02-03T21:59:05.785Z', updatedAt: '2024-02-03T21:59:05.785Z',
}, {
  id: 'bf22b212-4a6e-4a94-bb6d-3cc3411ca411', jp: 'むすめ', en: ['Daughter'], furi: [], notes: [], tags: ['person', 'family', 'noun'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.738Z', updatedAt: '2024-01-24T17:01:09.196Z',
}, {
  id: 'f60438d0-0591-43ea-972d-6f45aa6d2592', jp: 'インジニア', en: ['Engineer'], furi: [], notes: [], tags: ['person', 'occupation', 'katakana'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.804Z', updatedAt: '2024-01-26T20:50:48.174Z',
}, {
  id: '45663b39-fbb5-41e5-bf2d-07f8027df52a', jp: 'かいさつ', en: ['Ticket gate'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-26T00:05:29.629Z', updatedAt: '2024-01-26T00:05:29.629Z',
}, {
  id: 'e56e1b0c-6a18-46ac-b125-2e90c2ee0bb0', jp: 'スポーツ', en: ['Sports'], furi: [], notes: [], tags: ['sport', 'katakana'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-24T22:20:51.886Z', updatedAt: '2024-02-01T08:58:29.066Z',
}, {
  id: '6fcfbf13-4931-4768-83b8-7f9e42094bf5', jp: 'カフェ', en: ['Cafe'], furi: [], notes: ['Todo fix he katakana'], tags: ['other', 'place', 'katakana'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-27T21:58:59.478Z', updatedAt: '2024-02-01T08:48:03.184Z',
}, {
  id: 'c09d19c2-1524-4154-afd6-bbe8f2ec3bd1', jp: 'ちかてつ', en: ['Subway'], furi: [], notes: [], tags: ['transport', 'noun'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.756Z', updatedAt: '2024-01-24T17:01:09.106Z',
}, {
  id: 'a99be5a0-88da-46b3-91bf-b32e7748526d', jp: '七時', en: ['Seven o clock'], furi: ['しち', 'じ'], notes: [], tags: ['time', 'number', 'kanji', 'other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.729Z', updatedAt: '2024-01-24T17:01:09.277Z',
}, {
  id: '1d8461f0-1d45-4808-82db-e9972e110cd5', jp: '八', en: ['Eight'], furi: ['はち'], notes: [], tags: ['noun', 'kanji'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.777Z', updatedAt: '2024-01-24T17:01:09.115Z',
}, {
  id: '525614b1-e1ee-46d1-ad1d-9f1413c78ec6', jp: 'かれし', en: ['Boyfriend'], furi: [], notes: [], tags: ['person'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-31T22:40:44.741Z', updatedAt: '2024-01-31T22:40:44.741Z',
}, {
  id: 'b6d6cd4c-e0f7-4190-985f-e08ce23fbb4b', jp: 'じゃあ', en: ['Okay then', 'Well then', 'Well'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T15:56:13.194Z', updatedAt: '2024-01-24T17:01:09.124Z',
}, {
  id: '2a73a255-3c25-47eb-a16a-1a5ccc7a1261', jp: 'しゅうまつ', en: ['Weekend'], furi: [], notes: [], tags: ['time'], hits: 2, misses: 1, difficulty: 1, createdAt: '2024-01-24T12:38:46.454Z', updatedAt: '2024-02-03T12:30:26.879Z',
}, {
  id: 'f223793f-960c-4071-a007-1f7accb2a737', jp: 'みっつ', en: ['Three', 'Three of something'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T22:35:41.898Z', updatedAt: '2024-02-01T08:51:34.026Z',
}, {
  id: 'a1f5d1f6-9208-4b77-8942-24d91639272e', jp: 'だいがく', en: ['University', 'College'], furi: [], notes: [], tags: ['school', 'place'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.773Z', updatedAt: '2024-02-01T08:33:21.027Z',
}, {
  id: '76c73d88-f2ad-4bba-9ddb-c176cacc52d4', jp: 'うるさい', en: ['Noisy'], furi: [], notes: [], tags: ['adjective'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.791Z', updatedAt: '2024-01-24T17:01:09.414Z',
}, {
  id: 'e4cb5732-a507-45a7-ad12-a3e0a807ce61', jp: 'ききます', en: ['Listens'], furi: [], notes: [], tags: ['verb'], hits: 2, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.784Z', updatedAt: '2024-02-03T12:02:40.419Z',
}, {
  id: 'a0fa58ec-ccf7-40b2-ab06-135e65d9ea92', jp: 'ホラー', en: ['Horror'], furi: [], notes: [], tags: ['entertainment', 'katakana'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-02-01T20:29:33.848Z', updatedAt: '2024-02-01T20:29:33.848Z',
}, {
  id: 'ff188908-1cf1-43a9-be36-0cd8b9eeb61a', jp: 'ミステリー', en: ['Mistery'], furi: [], notes: [], tags: ['entertainment'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-02-01T20:21:09.548Z', updatedAt: '2024-02-01T20:21:09.548Z',
}, {
  id: '0793f824-296b-42a9-a60c-8c592005ea7e', jp: 'おんがく', en: ['Music'], furi: [], notes: [], tags: ['entertainment', 'noun'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.750Z', updatedAt: '2024-01-26T21:56:58.760Z',
}, {
  id: '8f4bb88a-18d5-443a-bc06-e5f74fbbf073', jp: 'せんたくき', en: ['Washing machine'], furi: [], notes: [], tags: ['tech', 'thing', 'noun'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-02-03T22:18:45.888Z', updatedAt: '2024-02-03T22:18:45.888Z',
}, {
  id: 'f6126e2c-4e76-44ee-aa62-2ad083c599ee', jp: 'ありがとうございます', en: ['Thank you'], furi: [], notes: [], tags: ['formality', 'other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-22T20:47:27.015Z', updatedAt: '2024-01-24T17:01:09.120Z',
}, {
  id: '38cd4451-4a1a-4a89-965e-e93fe96049ce', jp: 'ラジオ', en: ['Radio'], furi: [], notes: [], tags: ['katakana', 'tech'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-30T11:50:11.411Z', updatedAt: '2024-01-30T11:50:11.411Z',
}, {
  id: '59a0012f-7b27-4094-b278-03819846e7c4', jp: 'ひろい', en: ['Spacious', 'Wide', 'Big'], furi: [], notes: [], tags: ['adjective'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-02-03T21:38:04.631Z', updatedAt: '2024-02-03T21:38:04.631Z',
}, {
  id: '434907df-7edd-41f5-929c-c66d08767c34', jp: 'かっこいい', en: ['Cool', 'Good-looking', 'Stylish'], furi: [], notes: ['Can be written as カッコいい or  格好いい (not as common)'], tags: ['adjective'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.772Z', updatedAt: '2024-02-01T09:15:04.373Z',
}, {
  id: '64d4043e-8f17-4953-b000-7b2e5c70d635', jp: 'またあした', en: ['See you tomorrow'], furi: [], notes: [], tags: ['other', 'formality', 'time'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.749Z', updatedAt: '2024-02-01T08:50:30.765Z',
}, {
  id: '477481bc-92c1-400f-91b1-9b8ec8f4c9ea', jp: 'ざっし', en: ['Magazine'], furi: [], notes: [], tags: ['entertainment', 'thing', 'noun'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.757Z', updatedAt: '2024-02-01T09:01:58.738Z',
}, {
  id: 'da8431ff-b928-4ad8-9afd-ab2aa1b2bfad', jp: 'くうこう', en: ['Airport'], furi: [], notes: [], tags: ['transport', 'noun'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.760Z', updatedAt: '2024-01-24T17:01:09.024Z',
}, {
  id: 'b9565401-bdff-4a7e-a562-87d450648813', jp: 'ゲーム', en: ['Games', 'Video games'], furi: [], notes: [], tags: ['entertainment', 'katakana', 'tech'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-24T22:39:58.838Z', updatedAt: '2024-02-01T08:39:31.907Z',
}, {
  id: 'b5df0e7f-0d4e-48fc-82e1-ec2976f3dd01', jp: 'コート', en: ['Coat(s)'], furi: [], notes: [], tags: ['clothes', 'katakana'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.886Z', updatedAt: '2024-01-31T07:36:53.932Z',
}, {
  id: '4afc8b49-f38e-423f-878f-a40d037f7b9f', jp: 'ねます', en: ['Sleep'], furi: [], notes: [], tags: ['verb', 'other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-30T22:58:22.608Z', updatedAt: '2024-01-30T22:58:22.608Z',
}, {
  id: '268535cb-773d-4c1e-bf43-79d3d8f66991', jp: '京都', en: ['Kyoto'], furi: ['きょう', 'と'], notes: [], tags: ['place', 'noun', 'kanji'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.761Z', updatedAt: '2024-01-24T17:01:09.133Z',
}, {
  id: '23422225-4c5f-41e3-974a-c9cb11dd0190', jp: 'いしゃ', en: ['Doctor(s)'], furi: [], notes: [], tags: ['occupation', 'noun', 'person'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.764Z', updatedAt: '2024-02-01T08:42:29.877Z',
}, {
  id: '00c3ffa2-2eef-4262-9d8f-cc222ea9b0ca', jp: 'しろい', en: ['White'], furi: [], notes: [], tags: ['noun'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.780Z', updatedAt: '2024-01-26T23:59:38.214Z',
}, {
  id: '0a8bde75-02e2-4f2a-82e5-a98ee912ff19', jp: '円', en: ['Yen '], furi: ['えん'], notes: [], tags: ['other', 'noun', 'kanji'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-22T20:37:42.382Z', updatedAt: '2024-01-24T17:01:09.135Z',
}, {
  id: '3de007d5-a5b9-4695-a645-9c330c81e143', jp: 'どうが', en: ['Videos'], furi: [], notes: [], tags: ['entertainment'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-24T22:46:29.217Z', updatedAt: '2024-01-24T22:46:29.217Z',
}, {
  id: '776ceb14-c44b-4fa7-a81b-c1f4df480e50', jp: 'すんでいます', en: ['Lives'], furi: [], notes: [], tags: ['verb', 'place'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.763Z', updatedAt: '2024-01-26T22:16:38.617Z',
}, {
  id: 'b2f5600a-19c4-45ff-b2f2-d39f162474da', jp: 'いっかい', en: ['First floor'], furi: [], notes: [], tags: ['other', 'place'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-26T00:06:47.795Z', updatedAt: '2024-01-26T00:06:47.795Z',
}, {
  id: '6e9b2a69-977b-4589-9eda-a238a34747ae', jp: 'レストラン', en: ['Restaurant'], furi: [], notes: [], tags: ['food', 'katakana'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T15:43:15.214Z', updatedAt: '2024-01-24T17:01:09.250Z',
}, {
  id: '85445371-9626-4d7b-8f33-540107c00565', jp: 'ベッド', en: ['Bed'], furi: [], notes: [], tags: ['noun', 'katakana', 'thing'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-02-03T21:55:44.632Z', updatedAt: '2024-02-03T21:55:44.632Z',
}, {
  id: '93e4530f-606a-4023-8386-8fee10cf0b56', jp: 'かんごし', en: ['Nurse'], furi: [], notes: [], tags: ['occupation', 'person', 'noun'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.747Z', updatedAt: '2024-01-27T00:04:04.195Z',
}, {
  id: '142a4c28-e779-4e9d-ad7c-d54f73ed2476', jp: 'テニス', en: ['Tenis'], furi: [], notes: [], tags: ['sport', 'katakana'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-24T22:43:05.689Z', updatedAt: '2024-02-01T08:59:35.498Z',
}, {
  id: '2f49e332-c2d3-4036-b5d0-2136bfb184df', jp: 'しずか', en: ['Quiet'], furi: [], notes: [], tags: ['adjective'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.764Z', updatedAt: '2024-01-24T17:01:09.300Z',
}, {
  id: '01c77109-c134-4080-a891-b315ae570774', jp: 'ヨガ', en: ['Yoga'], furi: [], notes: [], tags: ['other', 'sport', 'katakana'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-24T22:22:01.156Z', updatedAt: '2024-02-01T09:01:02.361Z',
}, {
  id: 'bad34c32-768e-458c-818d-806f128d2ffb', jp: 'ロック', en: ['Rock'], furi: [], notes: [], tags: ['katakana', 'entertainment'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.889Z', updatedAt: '2024-01-26T21:57:13.413Z',
}, {
  id: '75065b96-4fe5-4345-be55-cc79e0fad015', jp: 'たぶん', en: ['Probably', 'Maybe', 'Supposedly'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-02-03T22:09:06.543Z', updatedAt: '2024-02-03T22:09:06.543Z',
}, {
  id: '76cf4767-cebc-4f01-b528-29754a777fb0', jp: '何', en: ['What'], furi: ['なん'], notes: [], tags: ['other', 'kanji'], hits: 2, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.691Z', updatedAt: '2024-02-03T12:02:09.887Z',
}, {
  id: '6b72d14c-d381-44b7-a86e-373ed1f9c874', jp: 'ピザ', en: ['Pizza'], furi: [], notes: [], tags: ['food', 'katakana'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.797Z', updatedAt: '2024-01-26T21:51:10.405Z',
}, {
  id: '16c0d844-b966-4eef-a03a-c0b4b99e58ba', jp: 'まいあさ', en: ['Every morning'], furi: [], notes: [], tags: ['time', 'other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.693Z', updatedAt: '2024-01-24T17:01:09.141Z',
}, {
  id: 'c176da81-68a7-4d9f-91ed-726b97f0824c', jp: 'きれい', en: ['Clean'], furi: [], notes: [], tags: ['adjective'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.766Z', updatedAt: '2024-01-24T17:01:09.119Z',
}, {
  id: '9fc5f689-63a3-4aeb-bf72-854ec65918e7', jp: 'やきゅう', en: ['Baseball'], furi: [], notes: [], tags: ['sport'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.762Z', updatedAt: '2024-02-01T09:00:46.053Z',
}, {
  id: '6f32e692-d277-4991-affc-b0a9463a55e8', jp: 'です', en: ['Is'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.605Z', updatedAt: '2024-01-24T17:01:09.128Z',
}, {
  id: '9b915c8a-4a6f-4e4a-a22b-6413bc665536', jp: 'いいですね', en: ['Sounds good'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-22T20:06:33.868Z', updatedAt: '2024-01-24T17:01:09.123Z',
}, {
  id: 'd1e28886-9a3c-4618-b99c-d420f88cd111', jp: 'さよなら', en: ['Bye'], furi: [], notes: [], tags: ['other', 'formality'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.629Z', updatedAt: '2024-01-26T22:18:00.589Z',
}, {
  id: '8ca02207-f9a4-4f88-a202-b343d3e813f2', jp: 'あ', en: ['Oh', 'Ah'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T15:55:13.580Z', updatedAt: '2024-01-28T18:46:34.038Z',
}, {
  id: '9f5fda29-3ce1-4aba-abb2-14199e30fc26', jp: 'とても', en: ['Very'], furi: [], notes: [], tags: ['adjective'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.765Z', updatedAt: '2024-01-24T17:01:09.425Z',
}, {
  id: '76fecc3e-5025-4dd2-853f-be3259c751d9', jp: 'アイスコーヒー', en: ['Iced coffe'], furi: [], notes: [], tags: ['katakana', 'food'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T23:04:29.755Z', updatedAt: '2024-01-27T00:00:25.405Z',
}, {
  id: 'ac7c0f21-f6e4-4468-be2d-f1ee1f2f24d9', jp: 'ちず', en: ['Map'], furi: [], notes: [], tags: ['noun', 'thing'], hits: 2, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.759Z', updatedAt: '2024-02-03T12:04:19.805Z',
}, {
  id: 'd2900eb0-55b3-494a-967d-acd9b015c038', jp: 'かぞく', en: ['Family'], furi: [], notes: [], tags: ['person', 'family', 'noun'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.752Z', updatedAt: '2024-01-24T17:01:09.122Z',
}, {
  id: 'bcc706dc-32d8-4205-a077-96635af2c23f', jp: 'あさごはん', en: ['Breakfast'], furi: [], notes: [], tags: ['food', 'noun'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.740Z', updatedAt: '2024-01-24T17:01:09.131Z',
}, {
  id: '33ba3e67-bb44-4864-8feb-33aa5001129f', jp: 'あそこ', en: ['Over there'], furi: [], notes: [], tags: ['other', 'place'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.769Z', updatedAt: '2024-01-26T22:05:45.497Z',
}, {
  id: 'cf6e514f-daa8-40fd-b4ac-95ef5478475c', jp: '私', en: ['I'], furi: ['わたし'], notes: [], tags: ['other', 'kanji', 'person'], hits: 2, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.780Z', updatedAt: '2024-02-03T12:23:39.566Z',
}, {
  id: 'cc299137-65c8-4605-86bb-6630b26ae959', jp: 'てんぷら', en: ['Tempura'], furi: [], notes: [], tags: ['food'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T15:46:44.433Z', updatedAt: '2024-01-24T17:01:09.358Z',
}, {
  id: '3394b806-ab65-4476-9cca-d3a5e9b24b71', jp: 'がすき', en: ['Like'], furi: [], notes: [], tags: ['verb'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-02-01T20:15:42.495Z', updatedAt: '2024-02-01T20:15:42.495Z',
}, {
  id: '69678969-1206-42ae-9691-caa653ba8486', jp: 'でんわ', en: ['Phone'], furi: [], notes: [], tags: ['tech', 'thing'], hits: 2, misses: 1, difficulty: 1, createdAt: '2024-01-27T21:49:55.823Z', updatedAt: '2024-02-03T11:44:36.225Z',
}, {
  id: '5dabd9f3-c7cb-4eab-99dd-42db622f9b05', jp: 'くつ', en: ['Shoe(s)'], furi: [], notes: [], tags: ['clothes', 'noun'], hits: 2, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.769Z', updatedAt: '2024-02-03T11:47:05.638Z',
}, {
  id: '2925264a-2e36-450e-b815-4d0590aa8273', jp: 'じゃないです', en: ['Is not'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.617Z', updatedAt: '2024-01-24T17:01:09.135Z',
}, {
  id: '4bf3844f-3cc1-440e-b27c-3ed951995098', jp: '日本', en: ['Japan'], furi: ['に', 'ほん'], notes: [], tags: ['country', 'place', 'noun', 'kanji'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.768Z', updatedAt: '2024-01-24T17:01:09.603Z',
}, {
  id: 'd8243048-03e3-46f7-81c8-19e235751c29', jp: 'かのじょ', en: ['Girlfiend'], furi: [], notes: [], tags: ['person'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-31T22:49:19.650Z', updatedAt: '2024-01-31T22:49:19.650Z',
}, {
  id: '6350e7ac-83f7-4960-81f2-fec53301ee08', jp: 'バステい', en: ['Bus stop'], furi: [], notes: [], tags: ['transport', 'katakana'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.792Z', updatedAt: '2024-01-26T20:26:43.839Z',
}, {
  id: '2e69e14b-67c4-4449-84d3-f1e4d43fe8b3', jp: 'かいだん', en: ['Stairs', 'Staircase', 'Stairwell'], furi: [], notes: [], tags: ['thing'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-27T21:52:49.986Z', updatedAt: '2024-01-27T21:52:49.986Z',
}, {
  id: '94f2f212-fa59-46fb-858a-e1c56198e3f3', jp: '新しい', en: ['New'], furi: ['あたら'], notes: [], tags: ['adjective', 'kanji'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-22T19:47:46.800Z', updatedAt: '2024-01-24T17:01:09.129Z',
}, {
  id: '4f5950cd-0619-4d44-a6ee-ebb1d783569e', jp: 'ゴミばこ', en: ['Trash can'], furi: [], notes: [], tags: ['other', 'katakana'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-27T09:10:59.101Z', updatedAt: '2024-02-01T08:39:45.476Z',
}, {
  id: 'b47f6da8-4fae-49a1-8598-3709d69a164e', jp: 'らいしゅう', en: ['Next week'], furi: [], notes: [], tags: ['time', 'other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-30T22:52:11.246Z', updatedAt: '2024-01-30T22:52:11.246Z',
}, {
  id: '2f111d1f-8806-43a1-9d25-aa6c7357a671', jp: 'みそしる', en: ['Miso soup'], furi: [], notes: [], tags: ['food'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T22:48:49.155Z', updatedAt: '2024-01-24T17:01:09.137Z',
}, {
  id: '599014d1-9881-42fd-bec3-a0ef6df44b08', jp: 'おてあらい', en: ['Restroom'], furi: [], notes: [], tags: ['place'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-27T21:38:57.147Z', updatedAt: '2024-01-27T21:38:57.147Z',
}, {
  id: '74a5ea49-5b23-4055-95eb-3c663f19395f', jp: 'つくえ', en: ['Desk'], furi: [], notes: [], tags: ['thing', 'noun'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-02-03T22:15:07.329Z', updatedAt: '2024-02-03T22:15:07.329Z',
}, {
  id: '1e5b7799-288e-4705-a073-8d6cf94b7566', jp: '一', en: ['One', 'An', 'A'], furi: ['いち'], notes: [], tags: ['noun', 'kanji'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.749Z', updatedAt: '2024-01-24T17:01:09.114Z',
}, {
  id: 'e47b3392-bf6f-4b8e-913f-3036d7c5386c', jp: 'おもしろい', en: ['Fun', 'funny', 'interesting'], furi: [], notes: [], tags: ['adjective'], hits: 2, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.769Z', updatedAt: '2024-02-03T11:44:36.188Z',
}, {
  id: 'dae9b841-b49c-4ade-ae55-0f33dbcfec06', jp: '三', en: ['Three', 'Third'], furi: ['さん'], notes: [], tags: ['noun', 'kanji'], hits: 2, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.774Z', updatedAt: '2024-02-03T12:02:09.895Z',
}, {
  id: '34075e11-bdfa-4777-8ce0-f54dfc884c44', jp: 'で', en: ['By', '\nOn', '\nBy (means of)'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-24T12:35:20.919Z', updatedAt: '2024-02-01T08:33:37.102Z',
}, {
  id: 'e6cd92ba-bc71-4258-8459-6cec70324312', jp: 'おしゃれ', en: ['Fashionable', 'Stylish'], furi: [], notes: [], tags: ['clothes', 'adjective'], hits: 2, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.766Z', updatedAt: '2024-02-03T11:47:05.642Z',
}, {
  id: '3dd6f94a-4724-4bf4-b414-54a3672fd311', jp: 'ニュース', en: ['News'], furi: [], notes: [], tags: ['entertainment', 'katakana'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.864Z', updatedAt: '2024-01-26T21:50:13.997Z',
}, {
  id: '6728032a-afac-4904-8470-fee0d96fc433', jp: 'ジャズ', en: ['Jazz'], furi: [], notes: [], tags: ['katakana', 'entertainment'], hits: 2, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.864Z', updatedAt: '2024-02-03T12:24:55.747Z',
}, {
  id: 'b209e3f9-48a3-4570-b3cc-4b0c35751c1d', jp: 'あかるい', en: ['Cheerful', 'Bright', 'Well lit'], furi: [], notes: [], tags: ['adjective'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.763Z', updatedAt: '2024-02-03T21:47:42.988Z',
}, {
  id: '032d8c52-dc4f-4492-9033-5ab0b2db396f', jp: 'こちら', en: ['This', 'This way', 'Over here'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-31T22:42:20.701Z', updatedAt: '2024-01-31T22:42:20.701Z',
}, {
  id: 'd9badc1a-6ab5-415b-934b-b8584b4fb13c', jp: '本', en: ['Books'], furi: ['ほん'], notes: [], tags: ['entertainment', 'thing', 'noun', 'kanji'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.749Z', updatedAt: '2024-01-24T17:01:09.129Z',
}, {
  id: '0e7324a3-e8b0-48ff-bb0c-4259037aff8d', jp: '四時', en: ['Four o clock'], furi: ['よ', 'じ'], notes: [], tags: ['time', 'kanji'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-30T23:34:12.010Z', updatedAt: '2024-01-31T07:34:19.589Z',
}, {
  id: '9bdf164e-d546-42a4-bb13-c198a1958752', jp: 'パスポート', en: ['Passport'], furi: [], notes: [], tags: ['transport', 'thing', 'katakana'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.782Z', updatedAt: '2024-01-26T21:51:00.680Z',
}, {
  id: 'fd9ee71b-b54e-465f-93ef-b826d3b18516', jp: 'どこ', en: ['Where'], furi: [], notes: [], tags: ['other', 'place'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.744Z', updatedAt: '2024-01-26T22:15:51.598Z',
}, {
  id: 'ad481e0f-627a-4e07-88b5-f99a04d2eec2', jp: 'よっつ', en: ['Four', 'Four of something'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T22:26:43.743Z', updatedAt: '2024-02-01T09:01:20.375Z',
}, {
  id: '40e8aec6-6ccf-414f-9f49-642146618317', jp: 'いつも', en: ['Always'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-30T11:53:18.368Z', updatedAt: '2024-01-30T11:53:18.368Z',
}, {
  id: 'd8c8242f-660f-4164-9dfb-6dea4e833e2a', jp: 'おなまえは', en: ['Whats your name'], furi: [], notes: [], tags: ['other', 'formality'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.691Z', updatedAt: '2024-02-01T08:53:24.002Z',
}, {
  id: '0691d69d-9a70-4c42-b811-f48ea63e0059', jp: 'サッカー', en: ['Soccer'], furi: [], notes: [], tags: ['sport', 'katakana'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.868Z', updatedAt: '2024-01-26T21:52:19.077Z',
}, {
  id: 'fe50f488-2f0e-43ef-b9be-56ba6058b4d4', jp: 'いい', en: ['Nice', 'Good', 'Like'], furi: [], notes: [], tags: ['adjective'], hits: 2, misses: 1, difficulty: 1, createdAt: '2024-01-22T20:06:00.581Z', updatedAt: '2024-02-03T12:03:33.507Z',
}, {
  id: '5213a9bd-e78f-400a-b1ce-23ea81964056', jp: 'きっぷ', en: ['Ticket'], furi: [], notes: [], tags: ['transport', 'thing', 'noun'], hits: 2, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.750Z', updatedAt: '2024-02-03T12:23:29.245Z',
}, {
  id: 'd6400252-514f-406d-a686-64ed03d177e5', jp: 'があります', en: ['Have', 'Is', 'There is'], furi: [], notes: [], tags: ['verb'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-02-03T21:45:35.415Z', updatedAt: '2024-02-03T21:45:35.415Z',
}, {
  id: 'fd077d41-2326-45d4-93e0-208a9c79d3e0', jp: 'の', en: ['Of', 'One'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.740Z', updatedAt: '2024-02-01T08:52:39.842Z',
}, {
  id: 'ad3b395b-33f1-4211-9a56-0ffd43e13661', jp: 'テレビ', en: ['TV'], furi: [], notes: [], tags: ['tech', 'katakana'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.774Z', updatedAt: '2024-01-26T21:51:59.797Z',
}, {
  id: 'a0a1ab54-009f-4613-af58-302f366642f0', jp: 'コーヒー', en: ['Coffee'], furi: [], notes: [], tags: ['thing', 'katakana', 'food'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.829Z', updatedAt: '2024-01-27T00:00:37.553Z',
}, {
  id: 'a7e39b71-69b1-4e02-85f0-f64533487ad6', jp: 'ひとつ', en: ['One', 'One of something'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T15:57:39.792Z', updatedAt: '2024-01-24T17:01:09.125Z',
}, {
  id: '3280a38a-01be-4458-a036-c6967572067f', jp: 'おっと', en: ['Husband'], furi: [], notes: [], tags: ['person', 'family', 'noun'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.758Z', updatedAt: '2024-01-24T17:01:09.489Z',
}, {
  id: '376e0bd7-c183-4e3c-857f-8ee69044d877', jp: 'あした', en: ['Tomorrow'], furi: [], notes: [], tags: ['time'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-30T22:49:06.059Z', updatedAt: '2024-01-30T22:49:06.059Z',
}, {
  id: 'b8ce2310-d9d5-49f9-b8af-08c6e3f82d16', jp: 'を', en: ['Through', 'With', 'For'], furi: [], notes: ['Goes before verbs'], tags: ['other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.704Z', updatedAt: '2024-01-24T17:01:09.397Z',
}, {
  id: '8305aca9-ce64-44b8-bd9f-c754743c3aea', jp: 'これ', en: ['This', 'This (one)', 'It'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.738Z', updatedAt: '2024-01-24T17:01:09.122Z',
}, {
  id: '1134e3b0-3c41-4f57-985b-4138e54c42d3', jp: 'にかい', en: ['Second floor', 'Two'], furi: [], notes: [], tags: ['other', 'place'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-27T21:50:54.322Z', updatedAt: '2024-01-27T21:50:54.322Z',
}, {
  id: '163f2ec7-eca1-45f8-a1b6-2d763b6c7523', jp: 'さいふ', en: ['Wallet'], furi: [], notes: [], tags: ['thing', 'noun'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-22T19:26:22.490Z', updatedAt: '2024-01-24T17:01:09.254Z',
}, {
  id: 'd13dc8a5-da47-4625-9e15-c348e5882813', jp: 'ですね', en: ['Isnt it', 'Right', 'Are'], furi: [], notes: [], tags: ['other'], hits: 2, misses: 2, difficulty: 1, createdAt: '2024-01-22T19:56:17.207Z', updatedAt: '2024-02-03T12:24:37.151Z',
}, {
  id: 'cdc48337-1c3f-46e4-8571-10444d416a78', jp: 'おおさか', en: ['Osaka'], furi: [], notes: [], tags: ['place', 'noun'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.765Z', updatedAt: '2024-01-24T17:01:09.253Z',
}, {
  id: '5147dda8-9592-4894-a37b-d68d8672cda6', jp: '土曜日', en: ['Saturday'], furi: ['ど', 'よう', 'び'], notes: [], tags: ['kanji'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-24T22:33:28.646Z', updatedAt: '2024-01-25T22:05:34.382Z',
}, {
  id: 'bb60a2e5-ae58-4c7c-8377-873a9ea2370e', jp: 'ゆうめい', en: ['Famous'], furi: [], notes: [], tags: ['adjective'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T16:15:21.360Z', updatedAt: '2024-01-24T17:01:09.461Z',
}, {
  id: '0aee08a6-6d1a-4dbe-9e29-13d445e015e4', jp: 'アイスクリーム', en: ['Ice cream'], furi: [], notes: [], tags: ['food', 'katakana'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T23:00:17.208Z', updatedAt: '2024-01-26T19:34:36.116Z',
}, {
  id: 'ce856188-3c81-4d34-825c-f57ac7fe94a4', jp: 'かわいい', en: ['Cute', 'Cuter', 'Pretty'], furi: [], notes: [], tags: ['adjective'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.764Z', updatedAt: '2024-01-24T17:01:09.134Z',
}, {
  id: '34444eae-f455-4c5d-8886-919443a62ddc', jp: 'あに', en: ['Older brother'], furi: [], notes: [], tags: ['person', 'family', 'noun'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.730Z', updatedAt: '2024-01-24T17:01:09.136Z',
}, {
  id: '29f97221-a0d3-4804-b223-9cc6ca49efea', jp: '少し', en: ['A bit', 'A little', 'Few'], furi: ['すこ'], notes: [], tags: ['adjective', 'kanji'], hits: 2, misses: 1, difficulty: 1, createdAt: '2024-01-23T23:02:21.006Z', updatedAt: '2024-02-03T11:44:36.233Z',
}, {
  id: 'b1204c4d-8053-4620-8456-07e724347907', jp: 'おはようございます', en: ['Good morning'], furi: [], notes: [], tags: ['formality', 'other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.721Z', updatedAt: '2024-01-24T17:01:09.202Z',
}, {
  id: 'cf3e5d98-79f8-4edd-93ad-ee350a8fbcb0', jp: 'アクション', en: ['Action'], furi: [], notes: [], tags: ['entertainment', 'katakana'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-02-01T21:03:51.532Z', updatedAt: '2024-02-01T21:39:44.519Z',
}, {
  id: '783d1939-8b70-402d-a770-0aeedcea77da', jp: 'ときどき', en: ['Sometimes'], furi: [], notes: [], tags: ['adjective'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.783Z', updatedAt: '2024-01-24T17:01:09.350Z',
}, {
  id: '34fa107e-7a76-41e4-b43b-a2645fc6c072', jp: 'のりlあえ', en: ['Switch', 'Transfer'], furi: [], notes: [], tags: ['other', 'place'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-27T09:19:55.073Z', updatedAt: '2024-02-01T08:52:55.624Z',
}, {
  id: 'a94c3ac4-213b-4745-af76-a8833169a04d', jp: 'バスケットボール', en: ['Basketball'], furi: [], notes: [], tags: ['sport', 'katakana'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.868Z', updatedAt: '2024-01-26T19:36:39.591Z',
}, {
  id: '70b3681a-0845-48c3-823c-322ebeb8ca8f', jp: 'ホテル', en: ['Hotel'], furi: [], notes: [], tags: ['katakana', 'place'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.791Z', updatedAt: '2024-01-27T00:07:42.605Z',
}, {
  id: '2d5288c4-6423-4423-8fa2-78d7681cb7ad', jp: '見ます', en: ['Watches'], furi: ['み'], notes: [], tags: ['verb', 'kanji'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.753Z', updatedAt: '2024-01-24T17:01:09.120Z',
}, {
  id: 'e84f9001-0aaf-4ba9-9014-4eb16998e562', jp: 'スカート', en: ['Skirt'], furi: [], notes: [], tags: ['clothes', 'noun', 'katakana'], hits: 2, misses: 1, difficulty: 1, createdAt: '2024-01-22T19:49:31.506Z', updatedAt: '2024-02-03T11:48:55.119Z',
}, {
  id: 'c40a1a79-8579-4ab0-848e-346f9a26e129', jp: 'ええと', en: ['Uhm'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T22:30:15.319Z', updatedAt: '2024-01-26T20:42:50.576Z',
}, {
  id: '6f0cbae2-a99a-4eb7-a5cf-171f8b67ac59', jp: '千', en: ['Thousand'], furi: ['せん'], notes: [], tags: ['other', 'kanji'], hits: 2, misses: 1, difficulty: 1, createdAt: '2024-01-22T20:51:38.390Z', updatedAt: '2024-02-03T12:03:33.496Z',
}, {
  id: '75f41235-2560-4714-bb17-6f9488a67a94', jp: 'パスタ', en: ['Pasta'], furi: [], notes: [], tags: ['food', 'katakana'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-30T23:09:07.400Z', updatedAt: '2024-01-30T23:09:07.400Z',
}, {
  id: 'babdc9bc-377e-4b5f-8acf-ce965311f50d', jp: 'みせ', en: ['Store'], furi: [], notes: [], tags: ['place', 'noun'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-22T20:44:15.270Z', updatedAt: '2024-01-24T17:01:09.125Z',
}, {
  id: '5e6090f5-fc78-499d-96d2-494bb15df28c', jp: 'ここ', en: ['Here'], furi: [], notes: [], tags: ['other', 'place'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.761Z', updatedAt: '2024-01-26T22:16:05.074Z',
}, {
  id: 'b61a387e-d538-496f-a804-2332982ba2b1', jp: 'でぐち', en: ['Exit'], furi: [], notes: [], tags: ['other', 'place'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-27T22:01:27.369Z', updatedAt: '2024-01-27T22:01:27.369Z',
}, {
  id: 'ce5336b6-4fba-4373-99ab-9a719be3ebca', jp: '東京', en: ['Tokyo'], furi: ['とう', 'きょう'], notes: [], tags: ['place', 'kanji'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-24T15:57:45.648Z', updatedAt: '2024-01-24T17:01:09.425Z',
}, {
  id: 'b3bcc3c4-a92e-4a28-a611-17bb29f618fe', jp: 'と', en: ['And', 'To', 'With'], furi: [], notes: [], tags: ['other'], hits: 2, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.758Z', updatedAt: '2024-02-03T12:24:25.428Z',
}, {
  id: 'c1aa2c1b-1b7c-4964-ad62-c0dd3fa5f759', jp: 'エレベーター', en: ['Elevator'], furi: [], notes: [], tags: ['transport', 'tech', 'katakana'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-27T21:44:48.353Z', updatedAt: '2024-02-01T08:38:05.160Z',
}, {
  id: '259dd5b8-c7a5-4d6a-8fee-bede185373c4', jp: '十', en: ['Ten'], furi: ['じゅう'], notes: [], tags: ['noun', 'kanji'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.774Z', updatedAt: '2024-01-24T17:01:09.131Z',
}, {
  id: 'e406451d-38f8-4adc-880a-8f5ac313ba67', jp: 'ぼうし', en: ['Hat(s)'], furi: [], notes: [], tags: ['clothes', 'noun'], hits: 2, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.766Z', updatedAt: '2024-02-03T11:48:55.129Z',
}, {
  id: '687a808c-81ca-401c-b0c7-1f5093c4d50a', jp: '古い', en: ['Old'], furi: ['ふる'], notes: [], tags: ['kanji', 'adjective'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-22T19:28:12.160Z', updatedAt: '2024-01-24T17:01:09.128Z',
}, {
  id: 'a505cb4c-0d51-4027-a90e-e0464da3d32e', jp: 'じはんち', en: ['Vending machines'], furi: [], notes: [], tags: ['tech', 'thing'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-27T22:03:14.088Z', updatedAt: '2024-01-27T22:03:14.088Z',
}, {
  id: 'cf8b0163-a4ae-43d0-b029-6372188f9ff9', jp: 'あたまがいい', en: ['Smart'], furi: [], notes: [], tags: ['adjective'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.766Z', updatedAt: '2024-01-24T17:01:09.122Z',
}, {
  id: 'd2c2c407-4483-499b-a439-23e48ed304db', jp: 'れんあい', en: ['Romance'], furi: [], notes: [], tags: ['entertainment'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-02-01T21:02:03.532Z', updatedAt: '2024-02-01T21:02:03.532Z',
}, {
  id: 'ca37a8c4-6354-4a42-bd58-fa34614c6bc0', jp: 'つくります', en: ['Make'], furi: [], notes: [], tags: ['verb'], hits: 2, misses: 1, difficulty: 1, createdAt: '2024-01-30T21:42:35.663Z', updatedAt: '2024-02-03T12:02:09.885Z',
}, {
  id: '35222a9e-b973-4325-8ca7-ffe8d7b4b571', jp: 'でかけます', en: ['Go out'], furi: [], notes: [], tags: ['other', 'verb'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-24T22:35:53.332Z', updatedAt: '2024-01-25T23:39:52.895Z',
}, {
  id: 'a8b4c85f-8f99-4119-804e-ebab56b909c8', jp: 'あります', en: ['To have'], furi: [], notes: [], tags: ['other', 'verb'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-26T00:08:47.434Z', updatedAt: '2024-01-28T22:09:41.028Z',
}, {
  id: '01219318-6351-47b4-af52-7c17ce8ee56c', jp: 'おいしい', en: ['Tasty', 'Good', 'Delicious'], furi: [], notes: [], tags: ['food', 'adjective'], hits: 2, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.787Z', updatedAt: '2024-02-03T12:03:09.075Z',
}, {
  id: 'bc334d18-c3e6-475e-9f76-c1b51de49683', jp: 'いす', en: ['Chair'], furi: [], notes: [], tags: ['noun', 'thing'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-02-03T22:06:36.151Z', updatedAt: '2024-02-03T22:06:36.151Z',
}, {
  id: 'e5e680a5-5af6-4347-837f-5f66501685cb', jp: 'あかい', en: ['Red'], furi: [], notes: [], tags: ['noun'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.755Z', updatedAt: '2024-01-26T23:59:22.171Z',
}, {
  id: 'ca48c495-d905-4351-bab0-f7d4f84adae6', jp: 'も', en: ['Also', 'Even', 'Any'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.693Z', updatedAt: '2024-01-24T17:01:09.601Z',
}, {
  id: '6147ee7a-c3d8-42aa-b140-14bb7be8a4b8', jp: 'くろい', en: ['Black'], furi: [], notes: [], tags: ['other', 'noun'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-22T20:41:03.735Z', updatedAt: '2024-01-26T23:59:32.579Z',
}, {
  id: '378dd76d-3ca5-4860-9aaf-1cd7e276e0c6', jp: 'ふとん', en: ['Futon'], furi: [], notes: [], tags: ['noun', 'thing'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-02-03T22:07:35.999Z', updatedAt: '2024-02-03T22:07:35.999Z',
}, {
  id: '991279a9-70dc-4339-b4dd-3cc8108b094a', jp: '六', en: ['Six'], furi: ['ろく'], notes: [], tags: ['noun', 'kanji'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:47:26.741Z', updatedAt: '2024-01-24T17:01:09.281Z',
}, {
  id: '9eb04e74-9516-49ea-8ba4-0808481a4136', jp: '飲みます', en: ['Drinks'], furi: ['の'], notes: [], tags: ['verb', 'food', 'kanji'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T21:56:06.114Z', updatedAt: '2024-01-30T11:29:12.177Z',
}];

export default WORDS_MOCK;
