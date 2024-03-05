const WORDS_MOCK = [{
  id: 'd440132e-603b-4965-a6f5-b8805dd90482', jp: '行く', en: ['Go'], furi: ['い'], notes: [], tags: ['kanji', '五段'], hits: 6, misses: 2, difficulty: 0, createdAt: '2024-02-04T21:00:38.180Z', updatedAt: '2024-03-03T20:16:40.192Z',
}, {
  id: 'c1a34034-821d-4174-b37b-69d0fc427cf6', jp: '家族　', en: ['Family'], furi: ['か', 'ぞく', ''], notes: [], tags: ['family', 'kanji'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.431Z', updatedAt: '2024-02-28T20:11:30.822Z',
}, {
  id: 'c3b5a69d-247b-4b54-b334-0d2dd3a3f459', jp: 'いいえ', en: ['No'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.254Z', updatedAt: '2024-02-28T17:22:44.929Z',
}, {
  id: 'eeb2f174-3088-40e7-b25d-5e675c60f9a0', jp: '出口', en: ['Exit'], furi: ['で', 'ぐち'], notes: [], tags: ['kanji', 'other', 'place'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.495Z', updatedAt: '2024-03-03T23:06:02.330Z',
}, {
  id: '55b5e247-232b-4ca4-951a-8a54b4978a46', jp: '古い', en: ['Old'], furi: ['ふる'], notes: [], tags: ['kanji', 'adjective'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.501Z', updatedAt: '2024-02-15T20:47:16.940Z',
}, {
  id: '28d9db49-8212-45c8-a0c9-a191c64acd1e', jp: 'いしゃ', en: ['Doctor(s)'], furi: [], notes: [], tags: ['occupation', 'noun', 'person'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.398Z', updatedAt: '2024-02-04T11:36:28.398Z',
}, {
  id: '3787b3d2-136e-4aa0-aaf7-fe56a482f8a1', jp: '奥さん', en: ['Wife'], furi: ['おく', '', ''], notes: [], tags: ['kanji', 'family'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-22T17:20:22.090Z', updatedAt: '2024-02-28T21:23:45.376Z',
}, {
  id: '5a32c829-0eec-46bb-9b03-439f9868d784', jp: '黒', en: ['Black'], furi: ['くろ'], notes: [], tags: ['other', 'noun', 'kanji'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.497Z', updatedAt: '2024-02-29T14:46:42.968Z',
}, {
  id: 'ade10398-2cf0-44bc-bd80-48a35196fd32', jp: '父', en: ['Dad'], furi: ['ちち'], notes: [], tags: ['family', 'kanji', 'person'], hits: 2, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.259Z', updatedAt: '2024-03-03T23:02:10.121Z',
}, {
  id: '304c9ada-93f4-4d7a-9f53-4a2d0fc40dcc', jp: 'が', en: ['Subject particle'], furi: [], notes: ['Can be sometimes used instead of は'], tags: ['particle'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-23T21:24:15.332Z', updatedAt: '2024-02-23T21:24:15.332Z',
}, {
  id: '6e7af93f-8aaa-47b9-8bf4-84f23ecc7526', jp: 'お祖父さん', en: ['Grandfather'], furi: ['', 'じ', 'い', '', ''], notes: [], tags: ['kanji', 'family'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-22T17:34:25.223Z', updatedAt: '2024-02-27T13:20:33.581Z',
}, {
  id: '4205cd2e-e6c5-47e7-9561-37995a310b59', jp: 'すてき', en: ['Lovely', 'Nice', 'Cute'], furi: [], notes: [], tags: ['adjective'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.262Z', updatedAt: '2024-02-27T13:33:21.126Z',
}, {
  id: '8e37d1cc-cdb3-4994-bd8c-16bad369191f', jp: 'デパート', en: ['Department store'], furi: [], notes: [], tags: ['katakana', 'place'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.237Z', updatedAt: '2024-02-27T13:25:21.715Z',
}, {
  id: '9c3e5a99-e66b-48f6-b180-5f2103d4ab04', jp: 'お茶', en: ['Green tea', 'Tea'], furi: ['', 'ちゃ'], notes: [], tags: ['food', 'kanji'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.248Z', updatedAt: '2024-02-27T21:45:56.209Z',
}, {
  id: '735ef513-17fb-4bde-9d68-17c55351db8b', jp: 'あぶない', en: ['Dangerous'], furi: [], notes: [], tags: ['adjective', 'other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-13T20:54:58.024Z', updatedAt: '2024-02-13T20:54:58.024Z',
}, {
  id: 'c0fa1055-d937-4f35-ba41-c405bbbf4728', jp: 'あ', en: ['Oh', 'Ah'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.405Z', updatedAt: '2024-02-27T13:28:06.204Z',
}, {
  id: '54e42a57-1990-419f-81d3-a9a0b80a7ecd', jp: '十', en: ['Ten'], furi: ['じゅう'], notes: [], tags: ['noun', 'kanji'], hits: 2, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.495Z', updatedAt: '2024-02-16T13:30:56.225Z',
}, {
  id: 'e8b72eb4-5653-4e88-bcd7-1b5d34dd0c35', jp: 'ペン', en: ['Pen'], furi: [], notes: [], tags: ['katakana', 'noun'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-20T13:45:48.404Z', updatedAt: '2024-03-02T18:17:38.409Z',
}, {
  id: '0e917c83-e428-4281-abcc-bb779e05cd82', jp: '〇', en: ['Zero'], furi: ['ゼロ'], notes: [], tags: ['other'], hits: 2, misses: 0, difficulty: 0, createdAt: '2024-02-13T21:13:38.187Z', updatedAt: '2024-02-28T17:22:46.361Z',
}, {
  id: '8288e889-f380-4aca-a112-055d7a7eab71', jp: '鉛筆', en: ['Pencil'], furi: ['えん', 'ぴつ'], notes: [], tags: ['kanji', 'school'], hits: 0, misses: 1, difficulty: 0, createdAt: '2024-02-27T10:45:55.098Z', updatedAt: '2024-03-02T18:15:27.547Z',
}, {
  id: 'd03657f6-5acc-400b-a721-f91d06395018', jp: 'おしゃれ', en: ['Fashionable', 'Stylish'], furi: [], notes: [], tags: ['adjective'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.436Z', updatedAt: '2024-03-02T18:30:16.674Z',
}, {
  id: 'bf6bb32e-c276-49e3-a2b2-32bb189b7bc2', jp: 'ちかてつ', en: ['Subway'], furi: [], notes: [], tags: ['transport', 'noun'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.527Z', updatedAt: '2024-02-04T11:36:28.527Z',
}, {
  id: '9cea9d32-a8af-4415-9322-c43c64564fc8', jp: 'やさしい', en: ['Kind', 'Easy', 'Nice'], furi: [], notes: [], tags: ['adjective'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.278Z', updatedAt: '2024-02-04T11:36:28.278Z',
}, {
  id: '13f704ff-7938-4cc7-a6dc-a608f6e02e04', jp: '週', en: ['Week'], furi: ['しゅう'], notes: [], tags: ['kanji', 'time'], hits: 3, misses: 0, difficulty: 0, createdAt: '2024-02-12T23:34:39.569Z', updatedAt: '2024-02-28T21:19:16.299Z',
}, {
  id: '2df58c15-894d-4348-ab5f-64b0560dff09', jp: 'バレーボール', en: ['Volleyball'], furi: [], notes: [], tags: ['katakana', 'sport'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.248Z', updatedAt: '2024-02-04T11:36:28.248Z',
}, {
  id: '3e563cc8-0837-4280-a1d1-267f4c088744', jp: 'おっと', en: ['Husband'], furi: [], notes: [], tags: ['person', 'family', 'noun'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.473Z', updatedAt: '2024-02-27T13:26:29.211Z',
}, {
  id: '935c48d5-b459-4097-abad-d2e57312c9d6', jp: 'テニス', en: ['Tenis'], furi: [], notes: [], tags: ['sport', 'katakana'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.409Z', updatedAt: '2024-02-04T11:36:28.409Z',
}, {
  id: 'f3de228b-f150-4ad2-aec0-c6e639d61a41', jp: 'あそこ', en: ['Over there'], furi: [], notes: [], tags: ['other', 'place'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.434Z', updatedAt: '2024-02-27T13:22:10.034Z',
}, {
  id: '64d228fd-fe04-4222-b45f-ac2d95723a79', jp: ' たくさん', en: ['Lots', 'Many', 'Much'], furi: [], notes: ['Can be used before verb'], tags: ['other'], hits: 0, misses: 1, difficulty: 0, createdAt: '2024-02-26T22:08:39.045Z', updatedAt: '2024-02-27T13:33:13.417Z',
}, {
  id: '49046395-0c01-4d6f-bf74-cd79ae1b3fbb', jp: 'べんごし', en: ['Lawyer(s)'], furi: [], notes: [], tags: ['occupation', 'noun'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.259Z', updatedAt: '2024-02-04T11:36:28.259Z',
}, {
  id: 'fd960e85-85e8-4f39-bc48-3e75cdec6fc5', jp: '乾く', en: ['Become dry'], furi: ['かわ', ''], notes: [], tags: ['kanji', '五段'], hits: 0, misses: 1, difficulty: 0, createdAt: '2024-02-23T21:46:49.465Z', updatedAt: '2024-03-03T20:13:44.476Z',
}, {
  id: 'bbe8390e-6410-4a2f-b905-afac5e02e246', jp: 'コロンビア', en: ['Colombia'], furi: [], notes: [], tags: ['place', 'country', 'katakana'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.270Z', updatedAt: '2024-02-04T11:36:28.270Z',
}, {
  id: '921aa41e-c133-4cc8-8d71-bd3075246c3c', jp: 'ソウル', en: ['Seoul'], furi: [], notes: [], tags: ['katakana', 'country'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-20T00:24:04.529Z', updatedAt: '2024-02-20T00:24:04.529Z',
}, {
  id: '741dc548-aa52-4da9-89c1-f1caf7a49564', jp: '息子', en: ['Son'], furi: ['むす', 'こ'], notes: [], tags: ['family', 'kanji'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.238Z', updatedAt: '2024-02-22T17:12:46.073Z',
}, {
  id: '2a301acb-df39-47eb-98ff-3cdbe40d14c8', jp: 'ヨガ', en: ['Yoga'], furi: [], notes: [], tags: ['other', 'sport', 'katakana'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.404Z', updatedAt: '2024-02-04T11:36:28.404Z',
}, {
  id: '2b034a6c-751b-425d-86d4-58c414c13846', jp: 'お母さん', en: ['Mother'], furi: ['', 'かあ', '', ''], notes: [], tags: ['kanji', 'family'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-20T22:47:56.722Z', updatedAt: '2024-02-28T20:16:32.553Z',
}, {
  id: '091a384a-f6e1-44a1-ba5a-95a88912fa5a', jp: '森', en: ['Forest'], furi: ['もり'], notes: [], tags: ['kanji', 'place'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-28T21:36:04.064Z', updatedAt: '2024-02-28T21:36:04.064Z',
}, {
  id: '29cb3c68-afae-4b68-93c0-6137cb272575', jp: 'メキシコ', en: ['Mexico'], furi: ['', '', '', ''], notes: [], tags: ['katakana', 'country'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-27T19:51:59.059Z', updatedAt: '2024-02-28T12:41:45.154Z',
}, {
  id: '74550487-808b-46d5-b377-70956b30fe89', jp: 'でした', en: ['Was'], furi: [], notes: [], tags: ['verb'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-25T15:01:55.585Z', updatedAt: '2024-02-25T15:01:55.585Z',
}, {
  id: 'be9d3faf-fe1f-45e6-b6d7-f176422a67c9', jp: '手紙', en: ['Letter'], furi: ['て', 'がみ'], notes: [], tags: ['kanji'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-21T21:24:21.207Z', updatedAt: '2024-03-02T18:18:33.829Z',
}, {
  id: '61351ec5-e5eb-44d9-abea-9c15f96bc337', jp: '大好き', en: ['Love'], furi: ['だい', 'す', ''], notes: [], tags: ['kanji', 'adjective'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-23T22:29:43.544Z', updatedAt: '2024-03-01T10:58:47.615Z',
}, {
  id: 'e4b05eeb-ace5-49a1-b639-010f627c6a10', jp: 'エレベーター', en: ['Elevator'], furi: [], notes: [], tags: ['transport', 'tech', 'katakana'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.497Z', updatedAt: '2024-02-04T11:36:28.497Z',
}, {
  id: '9dc9daef-d253-4d2d-b19b-c727c3910cac', jp: 'しゅうてん', en: ['Final stop'], furi: [], notes: [], tags: ['other', 'transport'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-05T20:55:05.852Z', updatedAt: '2024-02-05T20:55:05.852Z',
}, {
  id: 'cafa823f-55ee-4529-80f2-f43375e5d81f', jp: 'イギリス', en: ['England'], furi: [], notes: [], tags: ['country', 'place', 'katakana'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.527Z', updatedAt: '2024-02-04T11:36:28.527Z',
}, {
  id: 'cd48f0c9-327f-4c45-8b94-2ade859edb48', jp: 'にぎやか', en: ['Lively'], furi: [], notes: [], tags: ['adjective'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.249Z', updatedAt: '2024-02-04T11:36:28.249Z',
}, {
  id: 'b99b8e2d-dacd-40e5-abd5-e54099728060', jp: '両親', en: ['Parents'], furi: ['りょう', 'しん'], notes: [], tags: ['family', 'kanji'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-13T21:23:53.732Z', updatedAt: '2024-02-22T11:17:01.939Z',
}, {
  id: 'c844fd70-ee47-43a3-9ae7-1badf473aab5', jp: 'ひとつ', en: ['One', 'One of something'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.473Z', updatedAt: '2024-02-04T11:36:28.473Z',
}, {
  id: '830204ed-7d95-40fb-9241-de754937fb56', jp: 'ラーメン', en: ['Ramen'], furi: [], notes: [], tags: ['food', 'katakana'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.281Z', updatedAt: '2024-02-04T11:36:28.281Z',
}, {
  id: 'b4dcce4d-f6dc-4e41-a835-29a9fb5e2871', jp: '五', en: ['Five'], furi: ['ご'], notes: [], tags: ['noun', 'kanji'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.273Z', updatedAt: '2024-02-18T12:46:08.363Z',
}, {
  id: 'a3536d8b-dd19-41fe-a9fb-bc6e8bd8fc90', jp: 'かのじょ', en: ['Girlfiend'], furi: [], notes: [], tags: ['person'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.432Z', updatedAt: '2024-02-28T12:41:51.437Z',
}, {
  id: 'd495ab68-c16f-409d-9ffd-9c5e35fdd1e3', jp: '雨', en: ['Rain', 'Rainy'], furi: ['あめ'], notes: [], tags: ['other', 'kanji'], hits: 2, misses: 0, difficulty: 0, createdAt: '2024-02-16T15:14:52.948Z', updatedAt: '2024-02-28T21:23:38.848Z',
}, {
  id: '490895f1-0212-4682-8492-96c22536bf39', jp: 'のりかえ', en: ['Switch', 'Transfer'], furi: [], notes: [], tags: ['other', 'place', 'transport'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.475Z', updatedAt: '2024-02-26T22:12:24.539Z',
}, {
  id: 'e0c0706c-5159-41b2-9b15-f7bb27fb2d8e', jp: '本当', en: ['Really ', 'Trully'], furi: ['ほん', 'とう'], notes: [], tags: ['other', 'kanji'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-10T16:54:01.579Z', updatedAt: '2024-02-28T21:23:24.559Z',
}, {
  id: '1dd52e0e-823d-44df-8fc5-1d5571973b9b', jp: '彼女', en: ['She'], furi: ['かの', 'じょ'], notes: [], tags: ['kanji', 'other'], hits: 2, misses: 0, difficulty: 0, createdAt: '2024-02-20T22:46:57.330Z', updatedAt: '2024-02-28T21:19:29.680Z',
}, {
  id: 'f0b1289c-5961-4406-95f4-21102fef9267', jp: 'そして', en: ['And then...'], furi: [], notes: ['Used at the begining of a sentence to chain activities'], tags: ['other', 'formality'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-26T22:05:27.920Z', updatedAt: '2024-02-26T22:05:27.920Z',
}, {
  id: '6e6e645b-f439-4abe-a507-8604c2b69277', jp: 'ながい', en: ['Long'], furi: [], notes: [], tags: ['other', 'adjective'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-05T20:53:50.934Z', updatedAt: '2024-02-05T20:53:50.934Z',
}, {
  id: 'dc66b4ce-ef8a-4d91-b8ea-54d39b1ab0a9', jp: 'ちか', en: ['Underground level'], furi: [], notes: [], tags: ['place'], hits: 2, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.528Z', updatedAt: '2024-02-28T17:23:33.904Z',
}, {
  id: '66104824-0232-40c4-8fbb-63764d65bbd2', jp: 'シャワ', en: ['Shower'], furi: [], notes: [], tags: ['katakana', 'noun', 'place'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.283Z', updatedAt: '2024-02-04T11:36:28.283Z',
}, {
  id: '6d4abbf9-ca18-45e6-82ea-f3ee2da5d1f6', jp: 'きいろ', en: ['Yellow'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-20T18:17:56.037Z', updatedAt: '2024-02-20T18:18:17.069Z',
}, {
  id: '902e426d-5489-4ae4-a883-d9f996554b0d', jp: 'コンビニ', en: ['Convenience store'], furi: [], notes: [], tags: ['food', 'katakana', 'place'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.252Z', updatedAt: '2024-02-04T15:19:13.634Z',
}, {
  id: '452688c1-d31a-40e8-82cb-2f49aa0b5374', jp: '四', en: ['Four'], furi: ['よん'], notes: ['Can also be pronounced shi', 'But best avoid'], tags: ['noun', 'kanji'], hits: 2, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.370Z', updatedAt: '2024-02-28T20:14:38.527Z',
}, {
  id: '95aad76c-89f4-47f6-8581-b45dac7de0ac', jp: '田中', en: ['Tanaka last name'], furi: ['た', 'なか'], notes: [], tags: ['person', 'noun', 'kanji'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.253Z', updatedAt: '2024-02-18T12:50:18.996Z',
}, {
  id: '02638e70-68ef-4dad-9b04-a98c19f4a300', jp: 'ぐらい', en: ['Around', 'About'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-05T20:39:07.187Z', updatedAt: '2024-02-08T21:39:38.970Z',
}, {
  id: 'b326feae-4aed-4884-bf3d-eefec198e783', jp: '暑い', en: ['Hot (weather)', 'Thick'], furi: ['あつ', ''], notes: [], tags: ['other', 'kanji'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-17T18:46:32.247Z', updatedAt: '2024-02-27T19:44:40.699Z',
}, {
  id: '79a2906e-2f75-42d0-a700-b05be69415d9', jp: 'パスタ', en: ['Pasta'], furi: [], notes: [], tags: ['food', 'katakana'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.500Z', updatedAt: '2024-02-28T12:32:35.498Z',
}, {
  id: '8b6df767-e0a1-4619-adbd-33258907b6e5', jp: '火曜日', en: ['Tuesday'], furi: ['か', 'よう', 'び'], notes: [], tags: ['kanji', 'time'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-20T18:21:17.750Z', updatedAt: '2024-02-28T20:13:19.902Z',
}, {
  id: 'b22b25fe-6788-4007-99af-b72f15246594', jp: 'けいさつ', en: ['Police'], furi: [], notes: [], tags: ['occupation', 'person'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-13T21:06:05.483Z', updatedAt: '2024-02-13T21:06:05.483Z',
}, {
  id: 'cb6a003b-ec9e-41b5-bffd-66c74a09d24c', jp: '年', en: ['Year'], furi: ['ねん'], notes: [], tags: ['kanji', 'time'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-27T20:51:44.663Z', updatedAt: '2024-02-27T20:51:44.663Z',
}, {
  id: '3d77c0f6-c50d-4170-8dd5-aca4fdc9e0e0', jp: 'ミステリー', en: ['Mistery'], furi: [], notes: [], tags: ['entertainment'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.537Z', updatedAt: '2024-02-14T13:28:05.987Z',
}, {
  id: 'fc127270-d221-403d-8ec0-e7ac0a90900e', jp: '秒', en: ['Seconds'], furi: ['びょう'], notes: [], tags: ['kanji', 'time'], hits: 0, misses: 1, difficulty: 0, createdAt: '2024-02-28T10:57:44.782Z', updatedAt: '2024-02-28T12:38:37.361Z',
}, {
  id: '108e33b1-7699-437b-9ce4-53e78b3111ba', jp: 'そば', en: ['Soba noodles'], furi: [], notes: [], tags: ['food'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.272Z', updatedAt: '2024-02-04T11:36:28.272Z',
}, {
  id: '5541a100-ea65-426c-9004-5e18ce53926e', jp: 'Tシャツ', en: ['T Shirt'], furi: [], notes: [], tags: ['noun', 'katakana'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.377Z', updatedAt: '2024-03-02T18:30:21.385Z',
}, {
  id: '5bba44b3-ea43-4546-b788-e24587a128fb', jp: '来週', en: ['Next week'], furi: ['らい', 'しゅう'], notes: [], tags: ['time', 'kanji'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.437Z', updatedAt: '2024-02-28T21:19:23.061Z',
}, {
  id: '16a11a26-9ff6-45c4-813c-d730ac660514', jp: 'ふく', en: ['Clothes'], furi: [], notes: [], tags: ['noun'], hits: 2, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.278Z', updatedAt: '2024-03-02T18:29:52.841Z',
}, {
  id: 'a399830d-d1c2-493e-9f0b-2da4a5d01379', jp: 'こうちゃ', en: ['Black tea'], furi: [], notes: [], tags: ['food'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.270Z', updatedAt: '2024-02-27T13:27:57.739Z',
}, {
  id: '43e04bd7-8acd-4505-a7c2-ba811dbeb6bd', jp: '飲む', en: ['Drink', 'Take'], furi: ['の'], notes: [], tags: ['kanji', '五段'], hits: 2, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.502Z', updatedAt: '2024-03-03T22:03:06.074Z',
}, {
  id: 'ce35a143-a116-415a-92e1-f73fa6161871', jp: 'ファンタシー', en: ['Fantasy'], furi: [], notes: [], tags: ['katakana', 'entertainment'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.288Z', updatedAt: '2024-02-04T11:36:28.288Z',
}, {
  id: '2f76f44b-3ca5-44c2-8ac4-5f3b71c9b20e', jp: '先生', en: ['Teacher', 'Professor'], furi: ['せん', 'せい'], notes: [], tags: ['occupation', 'person', 'school', 'kanji'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.531Z', updatedAt: '2024-03-02T12:54:36.138Z',
}, {
  id: '2de826fe-f325-4342-801b-293938f8df53', jp: 'ダサい', en: ['Hideous'], furi: [], notes: [], tags: ['katakana', 'adjective'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.268Z', updatedAt: '2024-02-04T11:36:28.268Z',
}, {
  id: 'edd3eef2-b7c9-49fc-9ecc-31984de0c69e', jp: 'おいしい', en: ['Tasty', 'Good', 'Delicious'], furi: [], notes: [], tags: ['food', 'adjective'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.501Z', updatedAt: '2024-02-04T11:36:28.501Z',
}, {
  id: '97c2fd00-72ff-40d5-acdb-faade57a390d', jp: '昨日', en: ['Yesterday'], furi: ['きの', 'う'], notes: [], tags: ['kanji', 'time'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-23T21:56:54.626Z', updatedAt: '2024-02-23T22:00:24.282Z',
}, {
  id: '6aaac057-2d45-4f53-9c3d-8200132faf02', jp: '妹', en: ['Younger sister'], furi: ['いもうと'], notes: [], tags: ['family', 'kanji'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.277Z', updatedAt: '2024-02-22T17:08:37.402Z',
}, {
  id: '59b46d9e-eff7-4a71-b0a5-62adcad2e23d', jp: '使う', en: ['Use', 'Operate'], furi: ['つか', ''], notes: [], tags: ['kanji', '五段'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-23T21:40:33.817Z', updatedAt: '2024-03-03T20:06:51.257Z',
}, {
  id: '70f89336-81e9-4310-8502-77de4b95b3a2', jp: '来る', en: ['Come'], furi: ['く'], notes: [], tags: ['verb', 'kanji'], hits: 3, misses: 0, difficulty: 0, createdAt: '2024-02-04T21:23:07.725Z', updatedAt: '2024-02-26T11:26:39.865Z',
}, {
  id: '804ee018-1a3e-443f-bf1c-755cabcbc2b0', jp: 'ご飯', en: ['Rice', 'Meal'], furi: ['', 'はん'], notes: [], tags: ['food', 'kanji'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.251Z', updatedAt: '2024-02-27T21:44:28.799Z',
}, {
  id: '7b09b761-40fc-4599-be23-f3f9d94b0389', jp: 'どう', en: ['What about', 'How is'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.266Z', updatedAt: '2024-02-04T11:36:28.266Z',
}, {
  id: 'f86650be-0ee5-4278-9750-c16d6919d83f', jp: '中学校', en: ['Middle school'], furi: ['ちゅう', 'がっ', 'こう'], notes: [], tags: ['kanji', 'school', 'place'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-27T19:26:52.418Z', updatedAt: '2024-02-27T19:26:52.418Z',
}, {
  id: 'd4361252-1bb1-4739-a607-589b362e4cac', jp: 'サンドイッチ', en: ['Sandwich'], furi: [], notes: [], tags: ['food', 'katakana'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.289Z', updatedAt: '2024-03-02T18:18:09.303Z',
}, {
  id: '1ce642aa-a18a-47be-b5f8-42fdb2ef9d90', jp: '午後', en: ['Afternoon'], furi: ['ご', 'ご'], notes: [], tags: ['kanji', 'time'], hits: 0, misses: 1, difficulty: 0, createdAt: '2024-02-28T10:40:08.524Z', updatedAt: '2024-02-28T20:10:26.390Z',
}, {
  id: '3d5c5fa7-102c-4543-954c-c26c9d9b7b7c', jp: 'ちかい', en: ['Close', 'Near'], furi: [], notes: [], tags: ['place', 'other'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.282Z', updatedAt: '2024-02-28T12:43:34.124Z',
}, {
  id: '9fdebc05-e6fa-4888-8390-07dcbc8accee', jp: 'きつい', en: ['Hard'], furi: [], notes: [], tags: ['other', 'adjective'], hits: 0, misses: 1, difficulty: 0, createdAt: '2024-02-18T09:21:39.600Z', updatedAt: '2024-02-28T12:38:27.280Z',
}, {
  id: '7d8218dc-15c1-4e36-a885-fa29e9b71614', jp: 'インターネット', en: ['Internet'], furi: [], notes: [], tags: ['katakana', 'tech'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-22T18:17:22.937Z', updatedAt: '2024-02-22T18:17:22.937Z',
}, {
  id: '0fe8abfb-27c3-43b5-8b12-5d1b8f858456', jp: 'ポストカード', en: ['Postcard'], furi: [], notes: [], tags: ['katakana', 'other'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-10T22:10:08.509Z', updatedAt: '2024-03-02T18:17:52.711Z',
}, {
  id: '74e93e02-55dc-4de9-9940-49e85d21e81e', jp: '弟', en: ['Younger brother'], furi: ['おとうと'], notes: [], tags: ['family', 'kanji'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.279Z', updatedAt: '2024-02-22T16:49:00.562Z',
}, {
  id: '5da6e4d9-52b1-475b-a671-39ac039303e3', jp: 'を', en: ['Through', 'With', 'For'], furi: [], notes: ['Goes before verbs'], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.473Z', updatedAt: '2024-02-04T11:36:28.473Z',
}, {
  id: '4326ff81-1e49-4bf8-b6ff-22460c2a1e92', jp: 'ごめんなさい', en: ['Sorry'], furi: [], notes: [], tags: ['formality'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-20T18:15:31.710Z', updatedAt: '2024-02-20T18:15:31.710Z',
}, {
  id: '9cb6f437-bb24-4ad4-837f-db04649f7d7c', jp: 'ううん', en: ['No (informal)'], furi: [], notes: [], tags: ['formality'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-27T21:41:59.125Z', updatedAt: '2024-02-27T21:41:59.125Z',
}, {
  id: 'd96049ff-811d-431e-936c-604aa59db7f8', jp: 'しゅっしん', en: ['Being from', 'Is from'], furi: [], notes: [], tags: ['other', 'place'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.269Z', updatedAt: '2024-02-04T11:36:28.269Z',
}, {
  id: 'caa0539d-b8c8-495c-a59d-2d56b1e0c1c4', jp: '京都', en: ['Kyoto'], furi: ['きょう', 'と'], notes: [], tags: ['place', 'noun', 'kanji'], hits: 2, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.403Z', updatedAt: '2024-02-28T21:23:18.218Z',
}, {
  id: '7fe6e4a8-3360-44f4-aee4-d7d54895ce3c', jp: 'パン', en: ['Bread'], furi: [], notes: [], tags: ['food', 'katakana'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.266Z', updatedAt: '2024-03-02T18:17:13.933Z',
}, {
  id: '44a4d379-28cd-48a4-86bc-78f716eaa962', jp: '韓国', en: ['South Korea'], furi: ['かん', 'こく'], notes: [], tags: ['country', 'kanji'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.280Z', updatedAt: '2024-02-27T19:50:05.570Z',
}, {
  id: '08aff8af-6538-49de-84fa-f11f893b42ad', jp: '~の', en: ['Of', 'One', 'Belongs to', "'s"], furi: [], notes: ['Possesive particle'], tags: ['other'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.482Z', updatedAt: '2024-02-28T12:33:04.985Z',
}, {
  id: '12673a29-d541-4c56-9654-419c0ac060ca', jp: '買う', en: ['Purchase', 'Buy'], furi: ['か'], notes: [], tags: ['kanji', '五段'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.258Z', updatedAt: '2024-03-03T16:00:39.570Z',
}, {
  id: '9d67ce77-a3c1-4e16-a102-693cdabb7229', jp: 'チース', en: ['Cheese'], furi: [], notes: [], tags: ['katakana', 'food'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-23T22:31:42.360Z', updatedAt: '2024-02-28T12:37:38.724Z',
}, {
  id: 'd6058370-5d4d-4111-b082-b61edc8dd82e', jp: '去年', en: ['Last year'], furi: ['きょ', 'ねん'], notes: [], tags: ['kanji', 'time'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-27T20:54:23.648Z', updatedAt: '2024-02-27T20:54:23.648Z',
}, {
  id: '98ce2d3c-7503-427d-a09a-db27b3b3af31', jp: '冬', en: ['Winter'], furi: ['ふゆ'], notes: [], tags: ['time', 'kanji'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-18T01:28:08.451Z', updatedAt: '2024-02-27T21:02:17.454Z',
}, {
  id: '8b318578-331f-4a0a-ad16-4cd2e0cd0ef3', jp: '週末', en: ['Weekend'], furi: ['しゅう', 'まつ'], notes: [], tags: ['time', 'kanji'], hits: 3, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.536Z', updatedAt: '2024-02-18T12:12:43.441Z',
}, {
  id: '70e5c5d1-e70d-4f74-80e5-72703977130b', jp: '祖母', en: ['Grandmother'], furi: ['そ', 'ぼ'], notes: [], tags: ['kanji', 'family'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-22T17:23:12.560Z', updatedAt: '2024-02-28T20:11:46.034Z',
}, {
  id: '2b76948d-7eab-4af0-9039-c29402e2415e', jp: 'またね', en: ['See you later'], furi: [], notes: [], tags: ['formality'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-20T18:13:12.489Z', updatedAt: '2024-02-20T18:13:12.489Z',
}, {
  id: '005a9a4b-1daa-4c77-a029-85d30ad3732a', jp: '中国', en: ['China'], furi: ['ちゅう', 'ごく'], notes: [], tags: ['country', 'kanji'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.272Z', updatedAt: '2024-02-27T19:42:42.540Z',
}, {
  id: '7d911c17-43a3-4b8f-b98e-074db8496306', jp: 'あれ', en: ['That over there', 'That (one) over there'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.270Z', updatedAt: '2024-02-04T11:36:28.270Z',
}, {
  id: 'e52ae08f-37cc-4582-84f4-e71d462c2bf4', jp: 'ここ', en: ['Here', 'This is', 'This place'], furi: [], notes: [], tags: ['other', 'place'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.500Z', updatedAt: '2024-02-04T21:15:26.538Z',
}, {
  id: '8462d4ed-55ed-47ba-8cce-ffc101823ab7', jp: 'たまに', en: ['Occasionally'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-28T11:02:55.042Z', updatedAt: '2024-02-28T11:02:55.042Z',
}, {
  id: '65657551-aef8-4e65-8329-2ce0f70b3567', jp: '掛かる', en: ['Take', 'Begin', 'Cost'], furi: ['か', '', '', '', ''], notes: [], tags: ['kanji', '五段'], hits: 5, misses: 1, difficulty: 0, createdAt: '2024-02-05T20:42:20.061Z', updatedAt: '2024-03-03T20:14:08.085Z',
}, {
  id: '772c5cb5-39d2-45c3-a25e-931e97d6041e', jp: 'ふとん', en: ['Futon'], furi: [], notes: [], tags: ['noun'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.496Z', updatedAt: '2024-03-02T18:15:39.680Z',
}, {
  id: 'd9efbfaf-f167-4e5e-a45b-57e44d530d70', jp: 'ざっし', en: ['Magazine'], furi: [], notes: [], tags: ['entertainment', 'noun'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.540Z', updatedAt: '2024-03-02T18:18:43.040Z',
}, {
  id: '72941bc3-0e68-42a3-bc93-719c0475de4f', jp: '今夜', en: ['Tonight'], furi: ['こん', 'や'], notes: [], tags: ['kanji', 'time'], hits: 0, misses: 1, difficulty: 0, createdAt: '2024-02-27T20:49:19.038Z', updatedAt: '2024-02-28T21:23:15.434Z',
}, {
  id: '24891127-33fd-49dc-8b15-17fa67e96a26', jp: 'まだ', en: ['Still', 'Yet', 'Too'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.247Z', updatedAt: '2024-02-28T12:41:33.834Z',
}, {
  id: '508aa9c0-1505-49a9-a8d4-f7d81bfb5e07', jp: 'ひるごはん', en: ['Lunch'], furi: [], notes: [], tags: ['food', 'noun'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.244Z', updatedAt: '2024-02-28T17:23:14.264Z',
}, {
  id: 'c109e512-4498-4fe4-a4e3-fe3cc1e73719', jp: 'びょういん', en: ['Hospital'], furi: [], notes: [], tags: ['place'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-13T21:04:55.621Z', updatedAt: '2024-02-13T21:04:55.621Z',
}, {
  id: 'f1282605-3a03-40a6-acdc-9e50777fbda4', jp: '金曜日', en: ['Friday'], furi: ['きん', 'よう', 'び'], notes: [], tags: ['kanji', 'time'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-20T18:23:44.301Z', updatedAt: '2024-02-20T18:23:44.301Z',
}, {
  id: '93cc82ea-43c3-475b-923c-5c017cfda29f', jp: 'めったに', en: ['Hardly ever'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-28T11:05:42.579Z', updatedAt: '2024-02-28T11:05:42.579Z',
}, {
  id: 'd80bf27e-48c6-4d5f-b4bc-1f0fe865ac49', jp: '三', en: ['Three', 'Third'], furi: ['さん'], notes: [], tags: ['noun', 'kanji'], hits: 4, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.438Z', updatedAt: '2024-02-28T21:23:40.647Z',
}, {
  id: '561a6b7f-1b8e-47b8-89f0-d972a08bb31e', jp: '最初', en: ['The first'], furi: ['さい', 'しょ'], notes: [], tags: ['kanji', 'time'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-28T10:47:57.059Z', updatedAt: '2024-02-28T10:47:57.059Z',
}, {
  id: 'd658545c-550f-429f-bb22-2c74dcadeb6b', jp: 'とおい', en: ['Far'], furi: [], notes: [], tags: ['other', 'place'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.501Z', updatedAt: '2024-02-04T11:36:28.501Z',
}, {
  id: 'c667c917-46e0-48fa-81ff-b15c3ce153e4', jp: 'お兄さん', en: ['Big bro'], furi: ['', 'にい', '', ''], notes: [], tags: ['kanji', 'family'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-22T17:17:58.279Z', updatedAt: '2024-02-27T13:33:16.241Z',
}, {
  id: '7ff572f1-b572-478a-8a65-7a31213b6f30', jp: '図書館', en: ['Library'], furi: ['と', 'しょ', 'かん'], notes: [], tags: ['kanji', 'place', 'entertainment'], hits: 2, misses: 0, difficulty: 0, createdAt: '2024-02-23T21:03:08.484Z', updatedAt: '2024-02-28T20:15:31.397Z',
}, {
  id: '53b009a9-e990-458e-ae09-e34174e4a58e', jp: '大きい', en: ['Big', 'Large'], furi: ['おお'], notes: [], tags: ['adjective', 'kanji'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.259Z', updatedAt: '2024-02-16T13:31:10.383Z',
}, {
  id: '10c1c732-291a-4fc3-9adc-ce050a4b83dd', jp: '夜', en: ['Night'], furi: ['よる'], notes: [], tags: ['kanji', 'time'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-28T10:42:53.029Z', updatedAt: '2024-02-28T10:42:53.029Z',
}, {
  id: '4e022e6f-85fc-43c4-8522-34bf80db78cf', jp: '会う', en: ['Meet'], furi: ['あ', ''], notes: [], tags: ['kanji', '五段'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-23T21:43:16.411Z', updatedAt: '2024-03-03T18:23:19.546Z',
}, {
  id: '8a5a1eb7-c7c7-42c6-9329-6aac6e2565aa', jp: 'せまい', en: ['Cramped', 'Narrow', 'Small'], furi: [], notes: [], tags: ['adjective'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.497Z', updatedAt: '2024-02-04T11:36:28.497Z',
}, {
  id: '4be0245b-0de6-4f0c-b59b-8962a74ad94f', jp: '大丈夫', en: ['Ok', 'Alright'], furi: ['だい', 'じょう', 'ぶ'], notes: [], tags: ['other', 'kanji'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-13T20:58:54.621Z', updatedAt: '2024-02-27T13:25:44.068Z',
}, {
  id: 'fdd544fb-3025-4c0b-91a4-c9247c72366a', jp: 'バイク', en: ['Motorbike'], furi: [], notes: [], tags: ['katakana', 'transport'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-22T18:09:47.681Z', updatedAt: '2024-02-22T18:09:47.681Z',
}, {
  id: '337817b0-aee2-4bf6-96e7-c7a2008064e8', jp: '明日', en: ['Tomorrow'], furi: ['あ', 'した'], notes: [], tags: ['time', 'kanji'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.474Z', updatedAt: '2024-02-20T00:48:54.893Z',
}, {
  id: 'ccb61c21-4e29-48ad-aa0d-67c713a5ddcd', jp: 'アメリカ', en: ['America'], furi: [], notes: [], tags: ['country', 'katakana'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.252Z', updatedAt: '2024-02-04T11:36:28.252Z',
}, {
  id: '4f5b7477-3287-418f-bfa7-cf4774a597d8', jp: '毎週', en: ['Every week'], furi: ['まい', 'しゅう'], notes: [], tags: ['time', 'kanji'], hits: 2, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.279Z', updatedAt: '2024-02-18T12:49:42.369Z',
}, {
  id: '3c1cf9d9-ed74-49ce-ab8a-cd191708d30f', jp: '朝ご飯', en: ['Breakfast'], furi: ['あさ', '', 'はん'], notes: [], tags: ['food', 'kanji'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.436Z', updatedAt: '2024-02-28T12:34:17.574Z',
}, {
  id: '7bdaf4b3-87f9-4d0e-b09e-366e4c4dc68f', jp: 'てんき', en: ['Weather'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-16T15:14:26.994Z', updatedAt: '2024-02-16T15:14:26.994Z',
}, {
  id: '549f9134-38c0-4338-80b0-7a783d243c5d', jp: '緑', en: ['Green'], furi: ['みどり'], notes: [], tags: ['other', 'kanji'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-20T18:17:32.833Z', updatedAt: '2024-02-29T14:47:19.086Z',
}, {
  id: 'b9c93bda-15c1-4299-abf8-0bcacb984516', jp: 'は', en: ['Teeth'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-23T21:35:46.409Z', updatedAt: '2024-02-23T21:35:46.409Z',
}, {
  id: '51e1826f-54b4-4098-b050-931a79d8beac', jp: '彼', en: ['He'], furi: ['かれ'], notes: [], tags: ['kanji', 'other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-20T22:45:48.232Z', updatedAt: '2024-02-20T22:45:48.232Z',
}, {
  id: 'fe400e9f-a77b-408e-b446-e916537b4c01', jp: 'はれ', en: ['Sunny'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-16T16:34:11.435Z', updatedAt: '2024-02-16T16:34:11.435Z',
}, {
  id: 'ef492f68-4246-47e8-8b45-b56df430844b', jp: 'レストラン', en: ['Restaurant'], furi: [], notes: [], tags: ['food', 'katakana'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.410Z', updatedAt: '2024-02-04T11:36:28.410Z',
}, {
  id: '38f5f7bb-44a5-4e3c-af99-3dc50290eb68', jp: 'ネクタイ', en: ['Necktie'], furi: [], notes: [], tags: ['katakana'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.280Z', updatedAt: '2024-03-02T18:30:10.521Z',
}, {
  id: 'a3db6924-4b3d-41f4-92f1-0bfbd0e2c016', jp: '九', en: ['Nine'], furi: ['きゅう'], notes: [], tags: ['noun', 'kanji'], hits: 2, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.257Z', updatedAt: '2024-02-28T20:14:19.338Z',
}, {
  id: 'e70ca086-107d-4258-a31b-661bdd0c6573', jp: '猫', en: ['Cat'], furi: ['ねこ'], notes: [], tags: ['kanji', 'other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-20T13:48:21.086Z', updatedAt: '2024-02-20T13:48:21.086Z',
}, {
  id: '68aa7bd3-ce0c-4575-b593-29be8a02cec0', jp: 'えき', en: ['Station(s)', 'Train station(s)'], furi: [], notes: [], tags: ['transport', 'noun'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.245Z', updatedAt: '2024-02-04T11:36:28.245Z',
}, {
  id: '3f04013d-6b35-4c50-8783-777542929be1', jp: 'いつも', en: ['Always'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.473Z', updatedAt: '2024-02-04T11:36:28.473Z',
}, {
  id: '9598b693-518f-42ae-8dca-4662c8e16cc9', jp: 'そうじき', en: ['Vacuum cleaner'], furi: [], notes: [], tags: ['tech', 'noun'], hits: 0, misses: 1, difficulty: 0, createdAt: '2024-02-04T11:36:28.370Z', updatedAt: '2024-03-02T18:18:19.011Z',
}, {
  id: 'dd64a69e-a4eb-4fd5-8c86-616dc00fad57', jp: '少し', en: ['A bit', 'A little', 'Few'], furi: ['すこ'], notes: [], tags: ['adjective', 'kanji'], hits: 3, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.468Z', updatedAt: '2024-02-28T20:12:22.559Z',
}, {
  id: '8e4c96d3-7eab-4892-b22c-9a640f88be34', jp: 'かっこいい', en: ['Cool', 'Good-looking', 'Stylish'], furi: [], notes: ['Can be written as カッコいい or  格好いい (not as common)'], tags: ['adjective'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.539Z', updatedAt: '2024-02-04T11:36:28.539Z',
}, {
  id: '731d6890-f0d5-49dc-abc6-6dd726654bc9', jp: 'でんしレンジ', en: ['Microwave'], furi: [], notes: [], tags: ['noun', 'katakana', 'tech'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.271Z', updatedAt: '2024-02-04T11:36:28.271Z',
}, {
  id: 'dbc04c03-7aad-48da-8ed0-d6bebd53cb9e', jp: 'うちら', en: ['We'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-22T17:45:52.315Z', updatedAt: '2024-02-22T17:45:52.315Z',
}, {
  id: '19923b20-ab2d-45f5-b00c-396ae7715182', jp: 'もうすぐ', en: ['Soon', 'Shortly', 'Almost'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T21:23:47.073Z', updatedAt: '2024-02-27T13:28:56.814Z',
}, {
  id: '530af46d-7907-44c8-a9ed-d1b982469229', jp: 'ばんごはん', en: ['Dinner'], furi: [], notes: [], tags: ['food', 'noun'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.261Z', updatedAt: '2024-02-04T11:36:28.261Z',
}, {
  id: '833f4765-dba0-40eb-995a-8a358f93a04e', jp: 'キッチン', en: ['Kitchen'], furi: [], notes: [], tags: ['place', 'noun'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.258Z', updatedAt: '2024-02-04T11:36:28.258Z',
}, {
  id: '1d5d7037-1dd6-499f-835c-9b52a2bc356e', jp: 'カナダ', en: ['Canada'], furi: [], notes: [], tags: ['country', 'place', 'katakana'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.278Z', updatedAt: '2024-02-04T15:18:31.529Z',
}, {
  id: '3a4d7b04-f9ac-44e4-86b4-54b37ac1f7f1', jp: '九時', en: ['Nine o clock'], furi: ['く', 'じ'], notes: [], tags: ['time', 'kanji'], hits: 5, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.496Z', updatedAt: '2024-03-02T18:18:59.789Z',
}, {
  id: 'a2a18ded-0381-4a2c-bc32-37038174f52d', jp: 'それら', en: ['Those'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-09T09:10:27.689Z', updatedAt: '2024-02-28T12:32:39.183Z',
}, {
  id: '7bd385af-af93-491c-8146-dbe5dbb697ad', jp: 'お父さん', en: ['Father'], furi: ['', 'とう', '', ''], notes: [], tags: ['kanji', 'family'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-21T10:44:33.047Z', updatedAt: '2024-02-21T10:44:33.047Z',
}, {
  id: 'bf5132f0-1a2e-4fe8-ba0d-87eb05ce6ed8', jp: '伝説', en: ['Legend'], furi: ['でん', 'せつ'], notes: [], tags: ['kanji', 'other'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-20T13:51:18.799Z', updatedAt: '2024-02-20T20:56:42.074Z',
}, {
  id: '8281d448-2c6f-43bb-97d6-fff4dd68ea7d', jp: 'ベッド', en: ['Bed'], furi: [], notes: [], tags: ['noun', 'katakana'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.401Z', updatedAt: '2024-03-02T18:14:58.581Z',
}, {
  id: '5eed50b4-6f53-4498-ade6-1ffafe075676', jp: 'ココア', en: ['Cocoa'], furi: [], notes: [], tags: ['katakana', 'food'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-18T01:29:00.331Z', updatedAt: '2024-03-02T18:16:52.321Z',
}, {
  id: '329e42a9-c1cb-4a95-84e3-1e794e00a0e3', jp: 'ホーム', en: ['Platforms'], furi: [], notes: [], tags: ['transport', 'other', 'katakana'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.275Z', updatedAt: '2024-02-04T11:36:28.275Z',
}, {
  id: '7766a10a-2c55-492a-872b-89c7c271bb86', jp: 'たくさん', en: ['Lots', 'Many', 'Much'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-25T16:42:38.136Z', updatedAt: '2024-02-25T16:42:38.136Z',
}, {
  id: '8c0b8ad6-29dc-4736-bc9b-bc17d4691bb3', jp: '野球', en: ['Baseball'], furi: ['や', 'きゅう'], notes: [], tags: ['sport', 'kanji'], hits: 0, misses: 1, difficulty: 0, createdAt: '2024-02-04T11:36:28.405Z', updatedAt: '2024-02-28T21:23:34.991Z',
}, {
  id: '1b51898f-b670-4a1d-9b43-41e60626ae41', jp: 'ドレス', en: ['Dress'], furi: [], notes: [], tags: ['noun', 'katakana'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.257Z', updatedAt: '2024-03-02T18:29:49.104Z',
}, {
  id: '61393d14-e294-4f2a-b6b3-1cd73d0383aa', jp: '千', en: ['Thousand'], furi: ['せん'], notes: [], tags: ['other', 'kanji'], hits: 4, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.494Z', updatedAt: '2024-02-28T20:18:54.464Z',
}, {
  id: '19af99cb-0409-4577-9467-5fd57dfc0d96', jp: '後で', en: ['Later'], furi: ['あと', ''], notes: [], tags: ['kanji', 'time'], hits: 0, misses: 1, difficulty: 0, createdAt: '2024-02-27T20:47:39.007Z', updatedAt: '2024-02-28T21:22:54.440Z',
}, {
  id: '0a8222a4-d008-4896-8028-01fb525b0b19', jp: '下げる', en: ['To lower', 'Hang'], furi: ['さ', '', ''], notes: [], tags: ['kanji', '一段'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-26T14:50:04.281Z', updatedAt: '2024-03-03T20:11:12.814Z',
}, {
  id: 'fa044104-c2bc-4e6a-a2a9-9b19dfd2f7cd', jp: 'トロント', en: ['Toronto'], furi: [], notes: [], tags: ['place', 'katakana'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.277Z', updatedAt: '2024-02-27T13:24:22.707Z',
}, {
  id: 'e015009b-1cac-44a0-a09c-a8464d446ba5', jp: 'と', en: ['And', 'To', 'With'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.496Z', updatedAt: '2024-02-14T13:27:40.722Z',
}, {
  id: '2a5c2db9-4474-4338-8a66-f610c0463459', jp: '起きる', en: ['Get up', 'Wake up'], furi: ['お', ''], notes: [], tags: ['kanji', '一段'], hits: 6, misses: 3, difficulty: 0, createdAt: '2024-02-04T11:36:28.268Z', updatedAt: '2024-03-03T20:12:39.561Z',
}, {
  id: '06c6ae9c-1b16-4cef-8d9c-ba4185a75e47', jp: 'ええと', en: ['Uhm'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.474Z', updatedAt: '2024-02-04T11:36:28.474Z',
}, {
  id: 'c359c5af-77ac-4b54-94ca-9de49c820a8d', jp: '遊ぶ', en: ['Hang out'], furi: ['あそ', ''], notes: [], tags: ['kanji', '五段'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.247Z', updatedAt: '2024-03-03T22:58:51.966Z',
}, {
  id: '8f588166-43fe-45b9-92a9-9d954b378a3f', jp: 'どうが', en: ['Videos'], furi: [], notes: [], tags: ['entertainment'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.405Z', updatedAt: '2024-02-04T11:36:28.405Z',
}, {
  id: '4f50a668-7201-4128-bc24-112672be3c68', jp: 'おにぎり', en: ['Rice ball(s)'], furi: [], notes: [], tags: ['food'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.264Z', updatedAt: '2024-02-04T11:36:28.264Z',
}, {
  id: '7f3a998a-e6a8-4319-a5f9-825817c3e324', jp: '忙しい', en: ['Busy'], furi: ['いそが', '', '', '', ''], notes: [], tags: ['adjective', 'kanji'], hits: 0, misses: 1, difficulty: 0, createdAt: '2024-02-04T11:36:28.527Z', updatedAt: '2024-02-27T20:43:06.411Z',
}, {
  id: 'f33cea6f-a5ff-44bd-9aa9-48ee9811fcf7', jp: 'ジャケット', en: ['Jacket'], furi: [], notes: [], tags: ['noun', 'katakana'], hits: 2, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.253Z', updatedAt: '2024-03-02T18:29:57.441Z',
}, {
  id: '1bd922a6-d3d4-451e-b266-b134ea6aec53', jp: 'いや', en: ['No'], furi: [], notes: [], tags: ['other'], hits: 2, misses: 0, difficulty: 0, createdAt: '2024-02-23T22:46:30.920Z', updatedAt: '2024-02-28T12:42:43.009Z',
}, {
  id: '9b9277eb-e34d-4f3e-a8d8-08834562a301', jp: 'よく', en: ['Often'], furi: [], notes: [], tags: ['adjective'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.499Z', updatedAt: '2024-02-04T11:36:28.499Z',
}, {
  id: '8c95f031-9fa8-4217-9068-824b054bf9dd', jp: 'つくえ', en: ['Desk'], furi: [], notes: [], tags: ['noun'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.438Z', updatedAt: '2024-03-02T18:18:38.375Z',
}, {
  id: 'c64befb8-4244-49bd-827d-8f15cf8fa080', jp: 'ところ', en: ['Place', 'Area', 'About to'], furi: [], notes: [], tags: ['place'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-10T16:50:17.965Z', updatedAt: '2024-02-10T16:50:17.965Z',
}, {
  id: '07c1ec62-abcd-4ba0-8a81-04d8f9079afa', jp: 'みっつ', en: ['Three', 'Three of something'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.536Z', updatedAt: '2024-02-28T12:37:01.513Z',
}, {
  id: '58b99a75-52b5-4582-a51a-7b9682e58899', jp: 'にかい', en: ['Second floor', 'Two'], furi: [], notes: [], tags: ['other', 'place'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.469Z', updatedAt: '2024-02-04T11:36:28.469Z',
}, {
  id: '8f9070c5-8319-47da-ab37-e60675759a4c', jp: 'あのう', en: ['Ah'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-26T22:00:33.453Z', updatedAt: '2024-02-26T22:00:33.453Z',
}, {
  id: '258802a1-0cbc-432a-b0ad-7a5175169c27', jp: 'いす', en: ['Chair'], furi: [], notes: [], tags: ['noun'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.497Z', updatedAt: '2024-03-02T18:16:02.737Z',
}, {
  id: 'ca321fd3-687c-4792-8ede-7a7ee39409f0', jp: '妻', en: ['Wife'], furi: ['つま'], notes: [], tags: ['family', 'kanji'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.258Z', updatedAt: '2024-02-22T17:11:20.997Z',
}, {
  id: 'ffa50b2c-45a4-45e9-ba15-a3bdaf8b7d5f', jp: 'あなた', en: ['You'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-21T09:25:10.116Z', updatedAt: '2024-02-21T09:25:10.116Z',
}, {
  id: 'e1efbc7d-887c-4364-a32b-e9e8f668fa72', jp: 'パーテイー', en: ['Party'], furi: [], notes: [], tags: ['katakana', 'other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-22T18:48:16.305Z', updatedAt: '2024-02-22T18:48:16.305Z',
}, {
  id: '8cc175f5-f0c2-44ff-b6f7-61aafa6b45a8', jp: 'じゅうどう', en: ['Judo'], furi: [], notes: [], tags: ['sport'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.255Z', updatedAt: '2024-02-28T17:23:17.350Z',
}, {
  id: 'd8227dde-cecc-421c-a0ff-3fee1d3067e8', jp: '円', en: ['Yen ', 'Counter for money'], furi: ['えん'], notes: [], tags: ['other', 'noun', 'kanji'], hits: 4, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.399Z', updatedAt: '2024-02-28T21:19:18.434Z',
}, {
  id: '0744653c-e4c6-4d40-950d-ac3ad0734f7d', jp: 'ていしょく', en: ['Meal set(s)'], furi: [], notes: [], tags: ['food'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.376Z', updatedAt: '2024-02-04T11:36:28.376Z',
}, {
  id: 'c5c35abb-3636-4b32-9a2d-f5a20b37fdc6', jp: '水', en: ['Water(s)'], furi: ['みず'], notes: [], tags: ['noun', 'kanji'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.247Z', updatedAt: '2024-02-18T12:52:46.778Z',
}, {
  id: '6b827ee1-5b54-4d8b-bb02-8507247708c9', jp: '送る', en: ['Send', 'See off'], furi: ['おく', ''], notes: [], tags: ['kanji', '五段'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-21T21:23:32.035Z', updatedAt: '2024-03-03T20:12:21.522Z',
}, {
  id: 'f9dc3e45-b967-49fa-a941-5c2fd4b36e64', jp: 'も', en: ['Also', 'Even', 'Any', 'As well'], furi: [''], notes: ['Can be used after に'], tags: ['particle'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.496Z', updatedAt: '2024-02-27T21:31:18.586Z',
}, {
  id: '685e3bc2-f1e5-4534-aa23-2cc5928c1074', jp: 'コート', en: ['Coat(s)'], furi: [], notes: [], tags: ['katakana'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.535Z', updatedAt: '2024-03-02T18:30:01.650Z',
}, {
  id: '9eb7d863-b16c-447a-8b33-30684859c238', jp: 'テーブル', en: ['Table'], furi: [], notes: [], tags: ['katakana', 'noun'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.537Z', updatedAt: '2024-03-02T18:18:27.836Z',
}, {
  id: '6c748747-d9d1-435a-8253-0e250419a9a7', jp: '国', en: ['Country'], furi: ['くに'], notes: [], tags: ['kanji'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-27T19:40:16.448Z', updatedAt: '2024-02-27T19:40:16.448Z',
}, {
  id: '9effa414-0223-4ef1-8049-b5c2acf95802', jp: 'ベトナム', en: ['Vietnam'], furi: [], notes: [], tags: ['katakana', 'country'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.241Z', updatedAt: '2024-02-04T11:36:28.241Z',
}, {
  id: '86696474-90d4-4003-80f0-47c46ec3f769', jp: 'さよなら', en: ['Bye'], furi: [], notes: [], tags: ['other', 'formality'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.400Z', updatedAt: '2024-02-04T11:36:28.400Z',
}, {
  id: 'f24d0c78-1252-4607-bc4f-cd7a58ea4ade', jp: 'ブラジル', en: ['Brazil'], furi: [], notes: [], tags: ['country', 'katakana'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.273Z', updatedAt: '2024-02-28T17:22:42.714Z',
}, {
  id: '96f5d4d8-ebf9-4760-8e6e-0b9961abfa59', jp: '新聞', en: ['Newspaper'], furi: ['しん', 'ぶん'], notes: [], tags: ['kanji', 'entertainment'], hits: 2, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.237Z', updatedAt: '2024-02-16T13:27:49.841Z',
}, {
  id: 'fb5f1bfe-16be-40b0-88cf-4e72310a4bc3', jp: 'つぎ', en: ['Next'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T21:14:12.421Z', updatedAt: '2024-02-04T21:14:12.421Z',
}, {
  id: '435c8b29-a126-4ea2-a276-18d0d19d0ffe', jp: 'スパイン', en: ['Spain'], furi: [], notes: [], tags: ['katakana', 'country'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-27T19:51:28.746Z', updatedAt: '2024-02-27T19:51:28.746Z',
}, {
  id: 'dded52f6-b43f-4560-846a-b0aee16fe955', jp: 'ケーキ', en: ['Cake'], furi: [], notes: [], tags: ['food', 'katakana'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.527Z', updatedAt: '2024-02-04T11:36:28.527Z',
}, {
  id: '53826874-69eb-46b1-91b3-5731208c2161', jp: '話す', en: ['Speak', 'Talk'], furi: ['はな'], notes: [], tags: ['kanji', '五段'], hits: 3, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.296Z', updatedAt: '2024-03-03T18:36:42.881Z',
}, {
  id: '2998d319-d940-4028-83af-b10c26c13ffa', jp: 'ゴルフ', en: ['Golf'], furi: [], notes: [], tags: ['katakana', 'sport'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-22T18:17:58.026Z', updatedAt: '2024-02-22T18:17:58.026Z',
}, {
  id: '30e68ca9-563a-4926-8228-5144bcc40268', jp: '十分', en: ['Ten minutes'], furi: ['じゅっ', 'ぷん'], notes: [], tags: ['kanji', 'time'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-05T20:38:06.429Z', updatedAt: '2024-02-18T12:46:02.538Z',
}, {
  id: 'f23e3403-dbad-408d-861b-998b666b37a0', jp: '個', en: ['Counter for non living things'], furi: ['こ'], notes: [], tags: ['kanji', 'other'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-26T21:47:25.298Z', updatedAt: '2024-02-28T20:15:15.732Z',
}, {
  id: '8453d280-4239-43b6-aa63-539a35a8c858', jp: 'チョコレート', en: ['Chocolate'], furi: [], notes: [], tags: ['katakana', 'food'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-23T22:32:24.008Z', updatedAt: '2024-02-23T22:32:24.008Z',
}, {
  id: '1702e7ba-c343-45c7-8c09-0bba7421ed4c', jp: '万', en: ['Ten thousand'], furi: ['まん'], notes: [], tags: ['kanji', 'other'], hits: 4, misses: 0, difficulty: 0, createdAt: '2024-02-12T23:29:37.559Z', updatedAt: '2024-02-27T13:26:04.342Z',
}, {
  id: '86eef48e-6cdc-457a-9019-9ec205961cef', jp: '聞く', en: ['Listen', 'Ask'], furi: ['き'], notes: [], tags: ['kanji', '五段'], hits: 2, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.539Z', updatedAt: '2024-03-03T16:01:11.907Z',
}, {
  id: '05ce8760-2b1c-49cb-903e-1413c30445ce', jp: '休む', en: ['Rest', 'Sleep', 'Break'], furi: ['やす'], notes: [], tags: ['kanji', '五段'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-13T21:29:07.654Z', updatedAt: '2024-03-03T20:04:12.297Z',
}, {
  id: 'c08d06fd-194d-411a-a3c8-7678b2e758e9', jp: 'カメラ', en: ['Camera'], furi: [], notes: [], tags: ['katakana', 'tech'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-22T18:16:21.748Z', updatedAt: '2024-02-22T18:16:21.748Z',
}, {
  id: 'e5a573f8-333e-4605-83f2-b875c28e0142', jp: 'コンサート', en: ['Concert'], furi: [], notes: [], tags: ['katakana', 'entertainment'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-17T19:06:09.982Z', updatedAt: '2024-02-17T19:06:09.982Z',
}, {
  id: 'f5faa955-407e-4325-8a16-cb5bf9b39830', jp: '~じん', en: ['Nationality'], furi: [], notes: [], tags: ['person', 'other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.253Z', updatedAt: '2024-02-14T11:31:43.025Z',
}, {
  id: '3eee35b0-5350-4e7b-ad43-147e31f9305e', jp: 'せんたくき', en: ['Washing machine'], furi: [], notes: [], tags: ['tech', 'noun'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.534Z', updatedAt: '2024-03-02T18:18:14.656Z',
}, {
  id: '60974787-29ab-4953-80b8-2e517d9833da', jp: 'おはようございます', en: ['Good morning'], furi: [], notes: [], tags: ['formality', 'other'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.475Z', updatedAt: '2024-02-28T17:23:42.326Z',
}, {
  id: 'dd296e4c-df63-428e-9751-e0f3a79b3f17', jp: 'きっぷ', en: ['Ticket'], furi: [], notes: [], tags: ['transport', 'noun'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.474Z', updatedAt: '2024-03-02T18:16:38.940Z',
}, {
  id: 'f44839b1-dc77-4bc4-b301-b857104925c0', jp: '今日', en: ['Today'], furi: ['きょ', 'う', ''], notes: [], tags: ['other', 'time', 'kanji'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-13T21:30:19.472Z', updatedAt: '2024-02-27T13:22:14.100Z',
}, {
  id: '5e667436-962c-4b9a-9b95-ed6381f9f120', jp: '秋', en: ['Autumn'], furi: ['あき'], notes: [], tags: ['kanji', 'time'], hits: 2, misses: 0, difficulty: 0, createdAt: '2024-02-17T19:02:31.535Z', updatedAt: '2024-02-28T21:24:19.390Z',
}, {
  id: '2acee803-bbe2-4765-a33f-af9406ba9da2', jp: 'じゃあね', en: ['Bye'], furi: [], notes: [], tags: ['other', 'formality'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.272Z', updatedAt: '2024-02-04T11:36:28.272Z',
}, {
  id: '0083ce24-cedb-4011-bc11-176c499f93ba', jp: '走る', en: ['Run'], furi: ['はし', ''], notes: [], tags: ['kanji', '五段'], hits: 1, misses: 1, difficulty: 0, createdAt: '2024-02-04T11:36:28.258Z', updatedAt: '2024-03-03T18:36:35.146Z',
}, {
  id: '74cb53b5-d4ad-4965-bf4a-6cab7210c94d', jp: '七', en: ['Seven'], furi: ['なな'], notes: [], tags: ['noun', 'kanji'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.248Z', updatedAt: '2024-02-18T12:52:07.429Z',
}, {
  id: '23792a87-722d-43e1-bc07-be9b7f7b5dde', jp: 'てんぷら', en: ['Tempura'], furi: [], notes: [], tags: ['food'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.437Z', updatedAt: '2024-02-04T11:36:28.437Z',
}, {
  id: '72464dd6-333d-49bf-a60e-17fbe8612591', jp: 'くうこう', en: ['Airport'], furi: [], notes: [], tags: ['transport', 'noun'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.539Z', updatedAt: '2024-02-04T11:36:28.539Z',
}, {
  id: '840ce456-940a-4a2b-ac24-d2d8c90b8f07', jp: '四時', en: ['Four o clock'], furi: ['よ', 'じ'], notes: [], tags: ['time', 'kanji'], hits: 4, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.473Z', updatedAt: '2024-02-28T17:22:55.485Z',
}, {
  id: '1c9e548b-1838-4f28-835a-8c5e4b2f7818', jp: '子供', en: ['Kid', 'Children'], furi: ['こ', 'ども'], notes: [], tags: ['person', 'kanji', 'family'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-20T00:25:37.387Z', updatedAt: '2024-02-28T20:11:36.788Z',
}, {
  id: '99e0189b-ac80-4dd1-8986-949191650cc6', jp: 'ラジオ', en: ['Radio'], furi: [], notes: [], tags: ['katakana', 'tech'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.537Z', updatedAt: '2024-02-04T11:36:28.537Z',
}, {
  id: 'ead86ea9-82a5-424b-afd6-783734c259cf', jp: 'のど', en: ['Throat'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-23T21:36:03.361Z', updatedAt: '2024-02-23T21:36:03.361Z',
}, {
  id: '6d0e1a41-7f80-48cc-b96c-741ee40418bb', jp: '山', en: ['Mountain'], furi: ['やま'], notes: [], tags: ['kanji'], hits: 2, misses: 0, difficulty: 0, createdAt: '2024-02-15T21:54:25.551Z', updatedAt: '2024-02-27T13:22:26.232Z',
}, {
  id: '44cd03bb-731e-4684-9820-5e50ae263e55', jp: 'まち', en: ['Town', 'Wait', 'City'], furi: [], notes: [], tags: ['place', 'noun'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.284Z', updatedAt: '2024-02-04T11:36:28.284Z',
}, {
  id: 'c890cd6c-81f4-4ce7-ab23-897a448446cd', jp: '海', en: ['Sea', 'Ocean'], furi: ['うみ'], notes: [], tags: ['other', 'kanji', 'place'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-16T16:34:31.392Z', updatedAt: '2024-02-20T19:27:19.909Z',
}, {
  id: '2ae2b5ab-5897-4ff3-bbec-ffe0128e712e', jp: 'さいふ', en: ['Wallet'], furi: [], notes: [], tags: ['noun'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.473Z', updatedAt: '2024-03-02T18:18:05.087Z',
}, {
  id: 'aafc403c-2414-418b-b094-60e25aa76efd', jp: 'こんにちは', en: ['Hello'], furi: [], notes: [], tags: ['other', 'formality'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.263Z', updatedAt: '2024-02-04T11:36:28.263Z',
}, {
  id: '2c4a1e39-0902-4c05-b771-bb5614a328d3', jp: '六', en: ['Six'], furi: ['ろく'], notes: [], tags: ['noun', 'kanji'], hits: 2, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.501Z', updatedAt: '2024-02-15T20:52:45.112Z',
}, {
  id: '2b05b587-0dc4-42a6-8981-62cb1e086f3a', jp: '孫', en: ['Grandchild '], furi: ['まご'], notes: [], tags: ['kanji', 'family'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-22T17:24:08.755Z', updatedAt: '2024-02-22T17:24:08.755Z',
}, {
  id: 'b712e8c2-16b0-4023-987d-5142c1250955', jp: 'し', en: ['Play', 'Do'], furi: [], notes: [], tags: ['verb', 'entertainment'], hits: 2, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.257Z', updatedAt: '2024-02-23T21:09:26.920Z',
}, {
  id: '7853e28c-0efa-45ba-93a9-e9e8d108b954', jp: 'うん', en: ['Yes (informal)'], furi: [], notes: [], tags: ['formality'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-27T14:20:29.387Z', updatedAt: '2024-02-27T14:20:29.387Z',
}, {
  id: 'cc894e16-e52a-4eff-a6f8-fd11b9c53cad', jp: 'じゃないです', en: ['Is not'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.432Z', updatedAt: '2024-02-04T11:36:28.432Z',
}, {
  id: '23dc41b8-5258-4260-8f5b-c2371930b1f3', jp: 'できます', en: ['Know'], furi: [], notes: [], tags: ['verb'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-19T22:59:17.938Z', updatedAt: '2024-02-19T22:59:17.938Z',
}, {
  id: '6abbb3eb-179e-48f2-9986-a0035c6ab5f2', jp: '速い', en: ['Fast'], furi: ['はや', ''], notes: [], tags: ['kanji', 'い-adjective'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-05T20:40:58.026Z', updatedAt: '2024-03-03T21:33:37.454Z',
}, {
  id: '442820f3-1149-47d3-bc39-68d9a9ff066a', jp: '百', en: ['Hundred'], furi: ['ひゃく'], notes: [], tags: ['other', 'kanji'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.251Z', updatedAt: '2024-02-15T20:51:20.869Z',
}, {
  id: '8b7bcf0a-d3d7-4162-81e2-b661190cc827', jp: 'その', en: ['The', 'That', 'Its'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.269Z', updatedAt: '2024-02-04T11:36:28.269Z',
}, {
  id: '83a1eafb-1405-4277-859d-d26357f15b5d', jp: '分', en: ['Minutes'], furi: ['ふん'], notes: [], tags: ['kanji', 'time'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-05T20:49:54.199Z', updatedAt: '2024-02-16T13:28:04.505Z',
}, {
  id: '9de4db7c-1cee-4896-a7e9-a881666a86ae', jp: 'あかるい', en: ['Cheerful', 'Bright', 'Well lit'], furi: [], notes: [], tags: ['adjective'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.471Z', updatedAt: '2024-02-04T11:36:28.471Z',
}, {
  id: '3cf1a3a8-137f-411a-9769-36d035928dff', jp: '毎日', en: ['Every day'], furi: ['まい', 'にち'], notes: [], tags: ['time', 'kanji'], hits: 3, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.255Z', updatedAt: '2024-02-20T20:56:54.220Z',
}, {
  id: '86fbdc32-a27e-4fee-a888-355edcc91aa9', jp: '月', en: ['Month'], furi: ['がつ'], notes: [], tags: ['kanji', 'time'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-17T18:53:02.079Z', updatedAt: '2024-02-28T21:24:15.499Z',
}, {
  id: '4e086dbc-3fd9-486d-af36-1c81290cabe4', jp: '作る', en: ['Make', 'Build', 'Create'], furi: ['つく', ''], notes: [], tags: ['kanji', '五段'], hits: 3, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.502Z', updatedAt: '2024-03-03T20:06:21.465Z',
}, {
  id: 'dc3967f8-6f7d-4987-ac38-726252c94e93', jp: 'さん', en: ['Mr', 'Miss', 'Mrs'], furi: [], notes: [], tags: ['formality', 'other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.258Z', updatedAt: '2024-02-04T11:36:28.258Z',
}, {
  id: '1cf427ab-e814-4c03-838b-b39cae1905af', jp: 'ビザ', en: ['Visa'], furi: [], notes: [], tags: ['katakana', 'other'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-22T18:18:30.395Z', updatedAt: '2024-02-28T12:38:50.811Z',
}, {
  id: 'b2f24381-969a-43d1-9933-1ca0094341dc', jp: '学生', en: ['Student'], furi: ['がく', 'せい'], notes: [], tags: ['school', 'person', 'occupation', 'kanji'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.272Z', updatedAt: '2024-02-28T21:19:40.230Z',
}, {
  id: '781a12e8-a2eb-44f7-834e-4542a8d78c18', jp: '時', en: ['O clock'], furi: ['じ'], notes: [], tags: ['time', 'kanji'], hits: 3, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.256Z', updatedAt: '2024-02-28T20:16:07.064Z',
}, {
  id: '61604b7e-7332-4dc7-b977-c0ea1ed0f388', jp: '自転車', en: ['Bicycle'], furi: ['じ', 'てん', 'しゃ'], notes: [], tags: ['kanji', 'transport'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-20T22:50:23.896Z', updatedAt: '2024-03-02T18:21:44.141Z',
}, {
  id: '366d8260-6af7-402b-98cb-6bf3620eb6de', jp: '最後', en: ['The last'], furi: ['さい', 'ご'], notes: [], tags: ['kanji', 'time'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-28T10:48:49.122Z', updatedAt: '2024-02-28T10:48:49.122Z',
}, {
  id: 'cb9e6dfb-17f1-475f-82f7-491e0934f18a', jp: 'お姉さん', en: ['Big sister'], furi: ['', 'ねえ', '', ''], notes: [], tags: ['family', 'kanji'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-19T22:51:33.410Z', updatedAt: '2024-02-22T17:16:46.172Z',
}, {
  id: 'd042cac4-be17-4934-b796-0c14674fc281', jp: '四月', en: ['April'], furi: ['し', 'がつ'], notes: [], tags: ['kanji', 'time'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-20T18:17:09.849Z', updatedAt: '2024-02-28T20:16:24.452Z',
}, {
  id: '6eef1930-473f-4b23-9aac-6fe6d6663444', jp: 'スカート', en: ['Skirt'], furi: [], notes: [], tags: ['noun', 'katakana'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.475Z', updatedAt: '2024-03-02T18:30:25.735Z',
}, {
  id: 'e6306788-ba8e-497d-a1bc-f04b2b2d854a', jp: 'ホットドッグ', en: ['Hotdog'], furi: [], notes: [], tags: ['katakana', 'food'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-22T18:09:09.415Z', updatedAt: '2024-02-28T12:32:30.730Z',
}, {
  id: '93830d23-3415-4d5b-b8eb-bdf95ff42a43', jp: '面白い', en: ['Funny', 'interesting'], furi: ['おも', 'しろ', ''], notes: [], tags: ['kanji', 'い-adjective'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.438Z', updatedAt: '2024-03-03T21:25:14.330Z',
}, {
  id: 'd77d08d3-613b-4598-bb46-4160e94f2c3c', jp: 'で', en: ['By', '\nOn', '\nBy (means of)', 'At', 'In'], furi: [], notes: [], tags: ['other', 'particle'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.500Z', updatedAt: '2024-02-28T12:31:14.875Z',
}, {
  id: '6e87549c-2b85-4e27-939b-c9823e9e4d96', jp: '朝', en: ['Morning'], furi: ['あさ'], notes: [], tags: ['kanji', 'time'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-28T10:38:31.057Z', updatedAt: '2024-02-28T12:31:48.388Z',
}, {
  id: 'a9c1b819-029a-448c-9c5b-facff471b042', jp: 'デザート', en: ['Dessert'], furi: [], notes: [], tags: ['food', 'katakana'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-10T17:15:36.855Z', updatedAt: '2024-02-10T17:15:36.855Z',
}, {
  id: 'de180a3b-cac8-4dc1-9c84-66b122b4e49b', jp: 'コインロッカー', en: ['Locker'], furi: [], notes: [], tags: ['place', 'katakana'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.252Z', updatedAt: '2024-03-02T18:16:44.030Z',
}, {
  id: '80a18399-7412-44fd-ae78-37e83898fa23', jp: 'リビング', en: ['Living room'], furi: [], notes: [], tags: ['katakana', 'place'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.371Z', updatedAt: '2024-02-04T15:18:19.785Z',
}, {
  id: '71744b94-94ae-4f52-9bb3-54a084d7785e', jp: '~たい', en: ['Wanted', 'Are'], furi: [], notes: [], tags: [], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-25T18:42:17.162Z', updatedAt: '2024-02-25T18:42:17.162Z',
}, {
  id: '1e5bd100-df51-4be6-8fc8-b3b1fab82596', jp: 'アパート', en: ['Apartment'], furi: [], notes: [], tags: ['katakana', 'place', 'noun'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.266Z', updatedAt: '2024-02-04T11:36:28.266Z',
}, {
  id: '48404aef-a5cb-4ff5-ae72-4bb5f57fbffb', jp: '車', en: ['Car'], furi: ['くるま'], notes: [], tags: ['kanji', 'transport', 'tech'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-20T22:17:32.154Z', updatedAt: '2024-02-20T22:17:32.154Z',
}, {
  id: 'e70a5f29-b950-4781-a2ed-554be0879793', jp: 'どうぞよろしく', en: ['Nice to meet you'], furi: [], notes: [], tags: ['other', 'formality'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.249Z', updatedAt: '2024-02-04T11:36:28.249Z',
}, {
  id: '72921917-399c-445e-a32c-037c974251e1', jp: 'コンピューター', en: ['Computer'], furi: [], notes: [], tags: ['katakana', 'tech'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-22T18:15:55.152Z', updatedAt: '2024-02-22T18:15:55.152Z',
}, {
  id: '7e6e19e3-ad53-41dc-b120-54129ecfda29', jp: 'ビール', en: ['Beer'], furi: [], notes: [], tags: ['katakana', 'food'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-22T18:13:56.493Z', updatedAt: '2024-02-22T18:13:56.493Z',
}, {
  id: '45c2bdea-e3fa-4ac4-a40f-382d629866f6', jp: 'かいさつ', en: ['Ticket gate'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 1, difficulty: 0, createdAt: '2024-02-04T11:36:28.526Z', updatedAt: '2024-02-27T13:21:19.334Z',
}, {
  id: 'b821ca7b-167a-4bcf-812c-a345d5d1ad8d', jp: 'ニュース', en: ['News'], furi: [], notes: [], tags: ['entertainment', 'katakana'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.433Z', updatedAt: '2024-02-28T17:22:52.283Z',
}, {
  id: '8dafe5dc-e553-491f-b9ed-b495ef87c157', jp: 'フランス', en: ['France'], furi: [], notes: [], tags: ['katakana', 'country'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-27T19:51:03.043Z', updatedAt: '2024-02-28T17:23:26.546Z',
}, {
  id: '418b7f09-a361-4b07-83fb-37a74da0a4be', jp: 'これ', en: ['This', 'This (one)', 'It'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.473Z', updatedAt: '2024-02-04T11:36:28.473Z',
}, {
  id: 'af5272b3-1d44-41a6-9abf-54cc9789fb2e', jp: 'おやすみなさい', en: ['Good night'], furi: [], notes: [], tags: ['formality'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-20T18:13:52.653Z', updatedAt: '2024-02-20T18:13:52.653Z',
}, {
  id: '8787e02e-3712-4caf-95bf-366f67156445', jp: 'ちかく', en: ['Nearby', 'Close'], furi: [], notes: [], tags: ['other'], hits: 2, misses: 0, difficulty: 0, createdAt: '2024-02-13T21:22:42.101Z', updatedAt: '2024-02-28T12:42:55.749Z',
}, {
  id: '037ab8e1-45f9-45ee-a280-3f84d8a6e857', jp: '座る', en: ['Sit'], furi: ['すわ', '', '', ''], notes: [], tags: ['kanji', '五段'], hits: 3, misses: 0, difficulty: 0, createdAt: '2024-02-13T20:53:02.977Z', updatedAt: '2024-03-03T20:07:16.025Z',
}, {
  id: '5f1fd16b-681b-4de1-9f83-459757e993dd', jp: 'ジュース', en: ['Juice'], furi: [], notes: [], tags: ['food', 'katakana'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.260Z', updatedAt: '2024-03-02T18:16:11.773Z',
}, {
  id: '9a960168-40ec-4346-af8c-ad440fa65d10', jp: 'いい', en: ['Nice', 'Good', 'Like'], furi: [], notes: [], tags: ['adjective'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.473Z', updatedAt: '2024-02-04T11:36:28.473Z',
}, {
  id: 'd34667e5-56ff-4575-89a2-97e999c74bb1', jp: 'ある', en: ['Have', 'Be (inanimate objects)', 'Exist'], furi: [], notes: [], tags: ['other', 'verb'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.502Z', updatedAt: '2024-02-26T12:52:27.969Z',
}, {
  id: 'fc746187-1105-4686-9854-75e13ed6cd38', jp: 'アイスクリーム', en: ['Ice cream'], furi: [], notes: [], tags: ['food', 'katakana'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.469Z', updatedAt: '2024-02-27T13:24:29.748Z',
}, {
  id: '5160c1c5-40ea-4527-aa35-284515d2100a', jp: 'ようこそ', en: ['Welcome'], furi: [], notes: [], tags: ['formality', 'other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.260Z', updatedAt: '2024-02-04T11:36:28.260Z',
}, {
  id: '5cfdb8b8-2b08-4db6-a86f-e459abbccda1', jp: 'あげる', en: ['Give'], furi: ['', ''], notes: [], tags: ['verb'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-21T21:17:54.175Z', updatedAt: '2024-02-26T11:13:51.345Z',
}, {
  id: '73cb83ce-8bab-4f73-983c-095a98b2a9e8', jp: '彼女ら', en: ['They'], furi: ['かの', 'じょ', ''], notes: [], tags: ['kanji', 'other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-21T21:15:46.421Z', updatedAt: '2024-02-21T21:15:46.421Z',
}, {
  id: '04bb0f3a-ae65-4446-8742-063c38e82da9', jp: 'ドラマ', en: ['Drama'], furi: [], notes: [], tags: ['entertainment', 'katakana'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.498Z', updatedAt: '2024-02-04T11:36:28.498Z',
}, {
  id: 'a5740603-ce0a-4349-b851-d6230dbadc07', jp: 'フットボール', en: ['Football'], furi: [], notes: [], tags: ['katakana', 'sport'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-27T20:23:57.214Z', updatedAt: '2024-02-27T20:23:57.214Z',
}, {
  id: 'f5f333c3-d9d3-4f4d-a519-d1711721f1a4', jp: '読む', en: ['Read', 'Check'], furi: ['よ'], notes: [], tags: ['kanji', '五段'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.290Z', updatedAt: '2024-03-03T22:02:34.573Z',
}, {
  id: 'f8277bc1-f363-47f4-b7f1-5e7e1c92fe54', jp: '何時', en: ['What time'], furi: ['なん', 'じ'], notes: [], tags: ['time', 'kanji'], hits: 2, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.240Z', updatedAt: '2024-02-28T20:15:49.110Z',
}, {
  id: 'dcc2d0c4-5041-44f0-a710-4ce2f818b45a', jp: 'かさ', en: ['Umbrella'], furi: [], notes: [], tags: ['noun'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.248Z', updatedAt: '2024-03-02T18:16:34.196Z',
}, {
  id: 'e3378122-ec69-4720-990c-0d297e940ff3', jp: 'これら', en: ['These'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-09T09:10:02.369Z', updatedAt: '2024-02-09T09:10:02.369Z',
}, {
  id: 'c9e531c9-d664-4ddf-a4af-9443e6de0b24', jp: '時々', en: ['Sometimes'], furi: ['とき', 'どき'], notes: [], tags: ['adjective', 'kanji'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.471Z', updatedAt: '2024-02-28T11:01:59.536Z',
}, {
  id: '73acf87d-c73b-42d7-bf1e-26dc86406c3c', jp: 'きょうだい', en: ['Siblings'], furi: [], notes: [], tags: ['family'], hits: 0, misses: 1, difficulty: 0, createdAt: '2024-02-19T19:56:33.199Z', updatedAt: '2024-02-28T12:41:57.642Z',
}, {
  id: 'f9696e74-5d56-4282-a614-0be0a6d0c81a', jp: '公園', en: ['Park'], furi: ['こう', 'えん'], notes: [], tags: ['place', 'kanji'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-17T17:29:26.849Z', updatedAt: '2024-02-23T21:04:54.302Z',
}, {
  id: 'ca665450-906c-4359-afa0-95f591c9a3fb', jp: 'ホラー', en: ['Horror'], furi: [], notes: [], tags: ['entertainment', 'katakana'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.535Z', updatedAt: '2024-02-04T11:36:28.535Z',
}, {
  id: '240e7e1b-3b15-42e8-b792-ab0dc625b64e', jp: 'ゲーム', en: ['Games', 'Video games'], furi: [], notes: [], tags: ['entertainment', 'katakana', 'tech'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.539Z', updatedAt: '2024-02-04T11:36:28.539Z',
}, {
  id: '3c92fc57-2b26-468f-a8e2-e7731a717b5e', jp: 'アレルギー', en: ['Allergy'], furi: [], notes: [], tags: ['katakana', 'other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-13T21:21:30.038Z', updatedAt: '2024-02-13T21:21:30.038Z',
}, {
  id: '0df35b5c-bd38-42b2-bc32-886620516c82', jp: 'コーヒー', en: ['Coffee'], furi: [], notes: [], tags: ['katakana', 'food'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.470Z', updatedAt: '2024-03-02T18:16:57.549Z',
}, {
  id: '54dbc804-90e4-4e10-a9d4-337ebef13649', jp: '安い', en: ['Cheap', 'Inexpensive'], furi: ['やす'], notes: [], tags: ['adjective', 'kanji'], hits: 3, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.279Z', updatedAt: '2024-02-28T21:20:18.034Z',
}, {
  id: '2e9141f9-3421-47ce-840d-03b029e03ffb', jp: '土曜日', en: ['Saturday'], furi: ['ど', 'よう', 'び'], notes: [], tags: ['kanji'], hits: 3, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.474Z', updatedAt: '2024-02-28T21:24:02.711Z',
}, {
  id: '9250fd67-3405-4010-801f-1501a2c7e2e8', jp: 'アニメ', en: ['Anime'], furi: [], notes: [], tags: ['entertainment', 'katakana'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.278Z', updatedAt: '2024-02-04T11:36:28.278Z',
}, {
  id: 'df76d5c6-2b10-4842-9bce-3b9928fe844d', jp: '月曜日', en: ['Monday'], furi: ['げつ', 'よう', 'び'], notes: [], tags: ['kanji', 'time'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-20T18:20:42.330Z', updatedAt: '2024-02-28T20:14:32.103Z',
}, {
  id: '557e41fc-b95d-438a-9b88-0dcb8a7be3fa', jp: '母', en: ['Mom'], furi: ['はは'], notes: [], tags: ['person', 'family', 'noun', 'kanji'], hits: 2, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.263Z', updatedAt: '2024-02-28T12:36:54.330Z',
}, {
  id: '6e135a9c-bb47-4b1f-9907-4e698702ba02', jp: 'カレー', en: ['Curry'], furi: [], notes: [], tags: ['food', 'katakana'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.267Z', updatedAt: '2024-02-27T13:26:54.807Z',
}, {
  id: '7608bf51-f5cd-45cd-ad9e-72ae4ff2ca60', jp: 'コメディ', en: ['Comedy'], furi: [], notes: [], tags: ['entertainment', 'katakana'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.371Z', updatedAt: '2024-02-04T11:36:28.371Z',
}, {
  id: 'fa9f444a-9c15-444a-a1cc-9cac3607f620', jp: 'まいばん', en: ['Every night'], furi: [], notes: [], tags: ['time'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.500Z', updatedAt: '2024-02-14T11:18:24.580Z',
}, {
  id: 'b5adfacd-37cd-4133-83f7-d3b5dfbc3e46', jp: 'ひっこし', en: ['Move'], furi: [], notes: [], tags: ['verb'], hits: 4, misses: 2, difficulty: 0, createdAt: '2024-02-04T11:36:28.285Z', updatedAt: '2024-02-20T22:30:05.664Z',
}, {
  id: '1cfc5bd6-d3c9-4f82-ba54-217469b4bf13', jp: '見える', en: ['See', 'Watch', 'Look'], furi: ['み'], notes: [], tags: ['kanji', '一段'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.470Z', updatedAt: '2024-03-03T20:13:27.135Z',
}, {
  id: '73cdb5c6-fd02-4941-9f2d-3787a865ab7c', jp: 'サッカー', en: ['Soccer'], furi: [], notes: [], tags: ['sport', 'katakana'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.474Z', updatedAt: '2024-02-04T11:36:28.474Z',
}, {
  id: '43125375-daba-4c7d-9850-ee6d9f088f12', jp: 'くつ', en: ['Shoe(s)'], furi: [], notes: [], tags: ['noun'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.438Z', updatedAt: '2024-03-02T18:30:06.175Z',
}, {
  id: 'd5770e30-c114-48b4-8f54-2abb1dfb7bd7', jp: 'ポップ', en: ['Pop'], furi: [], notes: [], tags: ['entertainment', 'katakana'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.279Z', updatedAt: '2024-02-22T18:55:07.537Z',
}, {
  id: '8ff61ad7-94ac-4c04-80a3-07bc21202aa7', jp: 'からて', en: ['Karate'], furi: [], notes: [], tags: ['sport'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.266Z', updatedAt: '2024-02-14T13:26:18.995Z',
}, {
  id: '8ac5e628-5eb2-457c-a2b7-786718607595', jp: 'おんがく', en: ['Music'], furi: [], notes: [], tags: ['entertainment', 'noun'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.537Z', updatedAt: '2024-02-04T11:36:28.537Z',
}, {
  id: 'dcf9a3fc-dd18-494b-be87-6d706447adc0', jp: 'ライブ', en: ['Concert'], furi: [], notes: [], tags: ['katakana', 'entertainment'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-26T21:55:11.111Z', updatedAt: '2024-02-26T21:55:11.111Z',
}, {
  id: 'e44c51ea-ba18-4d7a-8b05-b98ffdadb9fc', jp: 'ひろい', en: ['Spacious', 'Wide', 'Big'], furi: [], notes: [], tags: ['adjective'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.535Z', updatedAt: '2024-02-04T11:36:28.535Z',
}, {
  id: '7c42d274-c8b3-4947-8403-943da4299b5f', jp: '映画', en: ['Movie'], furi: ['えい', 'が'], notes: [], tags: ['entertainment', 'noun', 'kanji'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.251Z', updatedAt: '2024-02-28T20:14:26.275Z',
}, {
  id: 'ea688b14-84aa-4a1c-a28d-89c8bb91b096', jp: 'そこ', en: ['There'], furi: [], notes: [], tags: ['other', 'place'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.276Z', updatedAt: '2024-02-04T15:18:25.573Z',
}, {
  id: '8de59dca-edc6-439f-a0ea-6f57d7d43d85', jp: 'こんばん', en: ['Tonight', 'This evening'], furi: [], notes: [], tags: ['other', 'time'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-17T19:04:14.931Z', updatedAt: '2024-02-17T19:04:14.931Z',
}, {
  id: '208d3964-1788-4e34-be1a-af71ee5f1ca3', jp: '木曜日', en: ['Thursday'], furi: ['もく', 'よう', 'び'], notes: [], tags: ['kanji', 'time'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-20T18:23:04.428Z', updatedAt: '2024-02-20T18:23:04.428Z',
}, {
  id: '67678083-882c-49e4-abd8-0ef2acc88286', jp: 'いらっしゃいませ', en: ['Welcome'], furi: [], notes: [], tags: ['other', 'formality'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.532Z', updatedAt: '2024-02-04T11:36:28.532Z',
}, {
  id: 'a200cc6e-b959-4f9d-9277-447f698abf3c', jp: 'ボール', en: ['Ball'], furi: [], notes: [], tags: ['katakana'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-20T00:36:35.003Z', updatedAt: '2024-03-02T18:15:06.554Z',
}, {
  id: '020bb501-bc77-4f22-b8da-f07f45b80b0d', jp: 'サラダ', en: ['Salad'], furi: [], notes: [], tags: ['food', 'katakana'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.498Z', updatedAt: '2024-02-28T12:31:30.287Z',
}, {
  id: '380c7c05-3a4a-4882-84d5-4c4f6025f565', jp: '~たち', en: ['Plural for living things'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-21T21:07:13.395Z', updatedAt: '2024-02-21T21:07:13.395Z',
}, {
  id: '8c4b8aba-e95c-4dff-a636-7048d1d55d0d', jp: '名前', en: ['Name', 'Given name', 'Title'], furi: ['な', 'まえ'], notes: [], tags: ['kanji', 'other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-21T10:46:22.253Z', updatedAt: '2024-02-26T10:51:02.145Z',
}, {
  id: 'b6cde01d-4d07-4b52-a69c-fee090124bcf', jp: 'トイレ', en: ['Toilet'], furi: [], notes: [], tags: ['katakana', 'place'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-22T18:56:05.007Z', updatedAt: '2024-02-28T12:32:24.353Z',
}, {
  id: '3141ce01-3741-4a30-b9d4-fd92135004a3', jp: '言い', en: ['Named', 'Called', 'Say'], furi: ['い'], notes: [], tags: ['verb', 'kanji'], hits: 4, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.263Z', updatedAt: '2024-02-20T22:29:46.711Z',
}, {
  id: '2517eb01-5546-4f69-adfe-c0a529ffaae9', jp: 'ありがとうございます', en: ['Thank you'], furi: [], notes: [], tags: ['formality', 'other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.539Z', updatedAt: '2024-02-04T11:36:28.539Z',
}, {
  id: 'fd6aa209-112e-415c-bdf3-b2ed819cdd66', jp: 'まんが', en: ['Manga'], furi: [], notes: [], tags: ['entertainment', 'noun'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.258Z', updatedAt: '2024-02-04T11:36:28.258Z',
}, {
  id: '70bd037e-74ea-4fa7-8dac-bce106871b29', jp: 'プール', en: ['Pool'], furi: [], notes: [], tags: ['katakana', 'other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-17T18:47:26.917Z', updatedAt: '2024-02-17T18:47:26.917Z',
}, {
  id: 'effcb016-4978-4e49-b3d3-b5a8e099903d', jp: 'ね', en: ['Isnt it'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.275Z', updatedAt: '2024-02-04T11:36:28.275Z',
}, {
  id: '5fed8d85-64f6-4b8a-8d37-75d8511f8043', jp: 'すんでい', en: ['Lives'], furi: [], notes: [], tags: ['verb', 'place'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.399Z', updatedAt: '2024-02-20T22:25:50.659Z',
}, {
  id: 'c38205fb-e224-45c3-b09f-8a89767826eb', jp: 'ひとり', en: ['One self'], furi: [], notes: [], tags: ['person', 'other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.372Z', updatedAt: '2024-02-04T11:36:28.372Z',
}, {
  id: 'fc13cac4-afea-48e5-9357-863a24f9612d', jp: '家', en: ['House'], furi: ['いえ'], notes: [], tags: ['noun', 'place'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.249Z', updatedAt: '2024-02-20T22:53:51.742Z',
}, {
  id: '086a8972-77ee-4f17-a120-00c04d34810e', jp: 'ホテル', en: ['Hotel'], furi: [], notes: [], tags: ['katakana', 'place'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.474Z', updatedAt: '2024-02-28T12:33:07.227Z',
}, {
  id: 'd8e4694c-84bf-42af-86d3-d50ac273cb4e', jp: 'ニューヨーク', en: ['New York'], furi: [], notes: [], tags: ['place', 'katakana'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.261Z', updatedAt: '2024-02-04T11:36:28.261Z',
}, {
  id: '60f08a2f-9932-4d79-93ff-d4e81ef3545e', jp: 'アイスコーヒー', en: ['Iced coffe'], furi: [], notes: [], tags: ['katakana', 'food'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.406Z', updatedAt: '2024-02-04T11:36:28.406Z',
}, {
  id: 'df580c4a-bfa5-43c8-a8a3-db45a328239e', jp: '娘', en: ['Daughter'], furi: ['むすめ'], notes: [], tags: ['family', 'kanji'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.531Z', updatedAt: '2024-02-22T17:13:42.072Z',
}, {
  id: '419faab7-8fd5-417e-9c56-138494e40e27', jp: 'でんわ', en: ['Phone'], furi: [], notes: [], tags: ['tech'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.432Z', updatedAt: '2024-03-02T18:15:20.373Z',
}, {
  id: '34260228-0448-497b-9646-f2592fc31e0b', jp: 'はなび', en: ['Fireworks'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-17T18:50:04.207Z', updatedAt: '2024-03-02T18:15:48.013Z',
}, {
  id: 'c9db9358-813e-4ecf-9ab9-3e126ccd9c72', jp: 'あの', en: ['That, those (over there)'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.294Z', updatedAt: '2024-02-04T11:36:28.294Z',
}, {
  id: '3baf3bc6-e6f2-4f52-b809-f7d4156a589a', jp: 'それ', en: ['That', 'That (one)'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.371Z', updatedAt: '2024-02-04T11:36:28.371Z',
}, {
  id: 'c6e2ad88-7778-4dd5-b7e4-6b29e50437f9', jp: 'くもり', en: ['Cloudy'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-17T19:01:20.836Z', updatedAt: '2024-02-17T19:01:20.836Z',
}, {
  id: 'e4b3d44e-9aa7-49e9-aa3b-1937058a1948', jp: '日本', en: ['Japan'], furi: ['に', 'ほん'], notes: [], tags: ['country', 'place', 'kanji'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.433Z', updatedAt: '2024-02-18T12:52:31.220Z',
}, {
  id: 'a29fd90c-817f-4672-a7a5-be3ed53f2e49', jp: '小学校', en: ['Elementary school'], furi: ['しょう', 'がっ', 'こう'], notes: [], tags: ['kanji', 'school', 'place'], hits: 1, misses: 1, difficulty: 0, createdAt: '2024-02-27T19:24:31.754Z', updatedAt: '2024-02-28T20:14:59.572Z',
}, {
  id: 'ff31d674-5e49-4d7f-8731-05162d6491cb', jp: '店', en: ['Store'], furi: ['みせ'], notes: [], tags: ['place', 'kanji'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.501Z', updatedAt: '2024-02-27T13:23:44.001Z',
}, {
  id: '368d6845-bc0e-4ac2-931b-ef56f685d47b', jp: '元気', en: ['Fine', 'Well'], furi: ['げん', 'き'], notes: [], tags: ['kanji', 'な-adjective'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-25T11:45:37.796Z', updatedAt: '2024-03-03T21:29:00.167Z',
}, {
  id: '364a5bda-56b8-4859-8f03-5245a87a8333', jp: 'しゅみ', en: ['Hobby'], furi: [], notes: [], tags: ['noun'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.252Z', updatedAt: '2024-02-04T11:36:28.252Z',
}, {
  id: 'a6c98e6b-988d-43dc-8ebb-a0750d26d86b', jp: 'ふたり', en: ['Two of'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-20T00:15:24.803Z', updatedAt: '2024-02-20T00:15:24.803Z',
}, {
  id: 'd8685a2c-3802-4102-b0ca-e1d8bbf6be47', jp: '花', en: ['Flower'], furi: ['はな'], notes: [], tags: ['noun', 'kanji'], hits: 3, misses: 0, difficulty: 0, createdAt: '2024-02-10T21:58:52.290Z', updatedAt: '2024-03-02T18:15:43.812Z',
}, {
  id: 'b29a9140-b02d-4f07-a168-f3e54b5aac92', jp: '今週', en: ['This week'], furi: ['こん', 'しゅう'], notes: [], tags: ['time', 'kanji'], hits: 4, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.371Z', updatedAt: '2024-02-28T20:15:54.411Z',
}, {
  id: '7626a9df-2602-4f74-8af6-026b0ac5954c', jp: 'うるさい', en: ['Noisy'], furi: [], notes: [], tags: ['adjective'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.536Z', updatedAt: '2024-02-04T11:36:28.536Z',
}, {
  id: '5bf9129e-7e9f-4996-a842-8314416485f5', jp: 'おてら', en: ['Temple'], furi: [], notes: [], tags: ['place'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-10T17:12:28.946Z', updatedAt: '2024-02-10T17:12:28.946Z',
}, {
  id: '520b5a49-6ccf-49af-ae00-afc104d27fd0', jp: '具合が悪い', en: ['Feeling sick'], furi: ['ぐ', 'あい', null, 'わる', ''], notes: [], tags: ['other', 'kanji'], hits: 2, misses: 0, difficulty: 0, createdAt: '2024-02-13T20:56:33.590Z', updatedAt: '2024-02-28T20:16:02.580Z',
}, {
  id: '0349627f-5502-4b65-bfa3-4ef0ba1e7fdf', jp: 'ご', en: ['Your'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-13T21:19:50.196Z', updatedAt: '2024-02-14T13:28:32.733Z',
}, {
  id: 'e62234a2-ee60-41c8-80b6-5b40d7fc2fc6', jp: 'かんごし', en: ['Nurse'], furi: [], notes: [], tags: ['occupation', 'person', 'noun'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.399Z', updatedAt: '2024-02-04T11:36:28.399Z',
}, {
  id: 'aa53013f-9a20-424d-aa5f-1a3576920ba8', jp: '果物', en: ['Fruit'], furi: ['くだ', 'もの'], notes: [], tags: ['food', 'kanji'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-23T21:33:59.361Z', updatedAt: '2024-02-27T11:21:33.871Z',
}, {
  id: '2353631a-d99c-434a-bd69-1194c215b037', jp: 'この', en: ['This'], furi: [], notes: [], tags: ['other'], hits: 2, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.533Z', updatedAt: '2024-02-28T12:31:34.578Z',
}, {
  id: '92be3f2c-ba2e-4571-a173-454ec8c318bf', jp: '春', en: ['Spring'], furi: ['はる'], notes: [], tags: ['time', 'kanji'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-17T17:30:25.419Z', updatedAt: '2024-02-27T21:01:37.742Z',
}, {
  id: '34ea3648-aa95-42c2-a3bb-333ad63bc9f6', jp: 'バスケットボール', en: ['Basketball'], furi: [], notes: [], tags: ['sport', 'katakana'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.471Z', updatedAt: '2024-02-04T11:36:28.471Z',
}, {
  id: '3d85e492-d647-4248-ac63-06ae0080eb27', jp: '静か', en: ['Quiet', 'Silent'], furi: ['しず', ''], notes: [], tags: ['kanji', 'な-adjective'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.399Z', updatedAt: '2024-03-03T21:27:55.072Z',
}, {
  id: 'fb80d6f8-0002-4758-9a98-f93687c6e25f', jp: 'ハンバーガー', en: ['Hamburger'], furi: [], notes: [], tags: ['katakana', 'food'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-22T18:07:50.403Z', updatedAt: '2024-02-22T18:07:50.403Z',
}, {
  id: '7448bd85-82cf-40c0-9302-3e43039d4738', jp: '匹', en: ['Counter for living things'], furi: ['ひき'], notes: [], tags: ['kanji', 'other'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-26T21:52:01.927Z', updatedAt: '2024-02-28T21:22:43.468Z',
}, {
  id: 'f3fcb9b9-638a-4b29-bf5a-fd140b55e77c', jp: '教える', en: ['Teach', 'Show'], furi: ['おし', '', ''], notes: [], tags: ['kanji', '一段'], hits: 0, misses: 1, difficulty: 0, createdAt: '2024-02-21T21:22:43.645Z', updatedAt: '2024-03-03T20:11:49.179Z',
}, {
  id: '5c2cddc9-946e-4851-bb60-cc838778d791', jp: '食べる', en: ['Eat'], furi: ['た'], notes: [], tags: ['kanji', '一段'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.249Z', updatedAt: '2024-03-03T22:02:49.528Z',
}, {
  id: '58222db3-7ba0-4f6a-8899-6050c9b842d3', jp: '売る', en: ['Sell'], furi: ['う', ''], notes: [], tags: ['kanji', '五段'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-23T21:08:15.362Z', updatedAt: '2024-03-03T20:05:24.031Z',
}, {
  id: 'a8f55042-a194-4ff6-9b01-7eb7080f3ae9', jp: 'ください', en: ['Please'], furi: [], notes: [], tags: ['formality', 'other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.253Z', updatedAt: '2024-02-04T11:36:28.253Z',
}, {
  id: '0362ca17-e467-45c2-a2ec-5cb7c8c42df2', jp: 'ケータイ', en: ['Mobile phone'], furi: [], notes: [], tags: ['katakana', 'tech'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-21T10:54:21.324Z', updatedAt: '2024-02-21T10:54:21.324Z',
}, {
  id: '860d6cac-bd2d-4fd8-ad90-78961bc4beb2', jp: 'かばん', en: ['Bag'], furi: [], notes: [], tags: ['noun'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.500Z', updatedAt: '2024-03-02T18:16:15.638Z',
}, {
  id: '291ed7f6-dd02-46b3-9eb3-488cc37673a8', jp: '水曜日', en: ['Wednesday'], furi: ['すい', 'よう', 'び'], notes: [], tags: ['kanji', 'time'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-20T18:21:54.333Z', updatedAt: '2024-02-28T12:38:46.219Z',
}, {
  id: '5c68d5d2-b13d-4dc6-9b2e-a49dea258581', jp: 'ちゃんと', en: ['Make sure to', 'Properly', 'Proper'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 1, difficulty: 0, createdAt: '2024-02-13T21:32:29.084Z', updatedAt: '2024-02-27T13:21:53.084Z',
}, {
  id: 'f61c5842-c6c2-4cdc-a9ab-adc5d205f3d7', jp: 'インジニア', en: ['Engineer'], furi: [], notes: [], tags: ['person', 'occupation', 'katakana'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.528Z', updatedAt: '2024-02-04T11:36:28.528Z',
}, {
  id: 'f56f4361-487a-497c-aa16-27d0c586cdeb', jp: 'またあした', en: ['See you tomorrow'], furi: [], notes: [], tags: ['other', 'formality', 'time'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.539Z', updatedAt: '2024-02-27T13:25:35.717Z',
}, {
  id: '64813dfc-5dde-4f18-8f98-f10ddd6175c0', jp: 'ジャズ', en: ['Jazz'], furi: [], notes: [], tags: ['katakana', 'entertainment'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.438Z', updatedAt: '2024-02-04T11:36:28.438Z',
}, {
  id: 'fa848da1-1f88-42c7-8949-657fa27a78a3', jp: 'パスポート', en: ['Passport'], furi: [], notes: [], tags: ['transport', 'katakana'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.472Z', updatedAt: '2024-03-02T18:17:18.277Z',
}, {
  id: '6afd7a59-60f2-4a27-9e8f-ff40a437985e', jp: 'お金', en: ['Money'], furi: ['', 'かね'], notes: [], tags: ['kanji', 'other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-23T22:09:37.984Z', updatedAt: '2024-02-23T22:09:37.984Z',
}, {
  id: 'ac732181-e445-464c-bf34-97cc0546ce8a', jp: 'あたまがいい', en: ['Smart'], furi: [], notes: [], tags: ['adjective'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.495Z', updatedAt: '2024-02-04T11:36:28.495Z',
}, {
  id: 'ba1894a6-bc72-4841-b364-87d3f23c3a6f', jp: 'ふり', en: ['Fall (rain)'], furi: [], notes: [], tags: ['verb'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-23T21:44:17.892Z', updatedAt: '2024-02-23T21:44:17.892Z',
}, {
  id: '6d970160-b893-4d94-ab75-684a2c292a95', jp: 'か', en: ['Is it?', 'That', 'Or'], furi: [], notes: ['Used at the end to ask something'], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.255Z', updatedAt: '2024-02-04T11:36:28.255Z',
}, {
  id: '7d7f63e7-7f04-4d4d-a22e-929dd540a59b', jp: '~は', en: ['Is', 'With', 'Regarding'], furi: [], notes: [], tags: ['particle'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.267Z', updatedAt: '2024-02-27T13:33:09.095Z',
}, {
  id: '3f8b953b-c2b7-4975-94fd-a75c53127f24', jp: 'ロック', en: ['Rock'], furi: [], notes: [], tags: ['katakana', 'entertainment'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.404Z', updatedAt: '2024-02-04T11:36:28.404Z',
}, {
  id: 'f05f8c94-c805-49f6-ae6c-8ff8a29c157b', jp: 'エアコン', en: ['Air conditioner'], furi: [], notes: [], tags: ['noun', 'katakana', 'tech'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.528Z', updatedAt: '2024-02-28T12:43:26.059Z',
}, {
  id: '8c715c18-236f-4c08-a2ff-1035ce98f581', jp: '男の子', en: ['Boy'], furi: ['おとこ', '', 'こ'], notes: [], tags: ['kanji', 'person'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-26T21:54:12.146Z', updatedAt: '2024-02-26T21:54:12.146Z',
}, {
  id: 'b55562f0-1c16-4716-a0d0-ecbacacfec17', jp: 'きゅきゅしゃ', en: ['Ambulance'], furi: [], notes: [], tags: ['transport'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-13T21:09:18.335Z', updatedAt: '2024-02-13T21:09:18.335Z',
}, {
  id: '1eeddf0d-844f-4797-ad77-f8f98c7fbe4e', jp: 'おんせん', en: ['Hot springs'], furi: [], notes: [], tags: ['place'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-18T01:30:16.367Z', updatedAt: '2024-02-18T01:30:16.367Z',
}, {
  id: 'ab9bee61-178a-4ccd-9a06-df71f1505759', jp: 'はい', en: ['Yes'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.237Z', updatedAt: '2024-02-04T11:36:28.237Z',
}, {
  id: '5afd10cc-01ad-4d4b-8f1c-7f593efb9b36', jp: '今', en: ['Now', 'Current'], furi: ['いま'], notes: [], tags: ['time', 'kanji'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.527Z', updatedAt: '2024-02-27T20:44:14.600Z',
}, {
  id: '2394d8c7-f935-4815-8a7a-169a145bf645', jp: 'たてもの', en: ['Building'], furi: [], notes: [], tags: ['place', 'noun'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-10T17:09:20.198Z', updatedAt: '2024-02-27T13:22:46.985Z',
}, {
  id: '4c1c5b70-32a0-4126-8661-79f6cd3c86ab', jp: 'おかし', en: ['Snacks'], furi: [], notes: [], tags: ['food'], hits: 0, misses: 1, difficulty: 0, createdAt: '2024-02-10T22:04:31.770Z', updatedAt: '2024-02-28T12:38:06.381Z',
}, {
  id: 'fda42ae9-d610-4fab-a6fd-e1de6699f148', jp: '夏', en: ['Summer'], furi: ['なつ'], notes: [], tags: ['time', 'kanji'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-17T17:39:20.336Z', updatedAt: '2024-02-27T21:00:54.445Z',
}, {
  id: '79dc898a-1594-4dba-b561-bbd2d34b1f24', jp: 'ピザ', en: ['Pizza'], furi: [], notes: [], tags: ['food', 'katakana'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.401Z', updatedAt: '2024-02-04T11:36:28.401Z',
}, {
  id: '6df9b36c-5335-4c08-b077-6907829dcf7e', jp: '初め', en: ['Beginning'], furi: ['はじ', ''], notes: [], tags: ['kanji', 'time'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-28T10:44:23.369Z', updatedAt: '2024-02-28T10:44:23.369Z',
}, {
  id: '44c69097-7d96-401a-93ea-acb108698413', jp: 'じゃあ', en: ['Okay then', 'Well then', 'Well'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.535Z', updatedAt: '2024-02-04T11:36:28.535Z',
}, {
  id: '0b7ac7c1-dc26-4290-8d01-8c25e80aae93', jp: '寝る', en: ['Sleep', 'Go to bed'], furi: ['ね', ''], notes: [], tags: ['kanji', '一段'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.540Z', updatedAt: '2024-03-03T20:12:53.948Z',
}, {
  id: '92b2ae56-1abb-43eb-a0cb-28d68aaac533', jp: 'オーストラリア', en: ['Australia'], furi: [], notes: [], tags: ['katakana', 'country'], hits: 2, misses: 0, difficulty: 0, createdAt: '2024-02-19T22:55:21.059Z', updatedAt: '2024-02-28T12:42:59.093Z',
}, {
  id: 'd7e0ff37-6caa-4918-9a53-c9ed8ebd4c22', jp: '彼ら', en: ['They'], furi: ['かれ', ''], notes: [], tags: ['kanji', 'other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-21T21:14:22.583Z', updatedAt: '2024-02-21T21:14:22.583Z',
}, {
  id: '979f7ee2-1cdd-42ae-84d9-ae1bb1e099a1', jp: '私', en: ['I'], furi: ['わたし'], notes: [], tags: ['other', 'kanji', 'person'], hits: 2, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.435Z', updatedAt: '2024-02-28T20:12:05.935Z',
}, {
  id: '6327d575-efad-4b0c-92c9-1d7bfbe72462', jp: 'タクシー', en: ['Taxi'], furi: [], notes: [], tags: ['transport', 'katakana'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.270Z', updatedAt: '2024-02-28T12:31:40.934Z',
}, {
  id: '8f5696db-4ed2-40be-a049-f1a010e871b1', jp: '二', en: ['Two'], furi: ['に'], notes: [], tags: ['noun', 'kanji'], hits: 2, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.238Z', updatedAt: '2024-02-28T20:12:37.920Z',
}, {
  id: '6bd596e8-812d-4367-83d8-16d729c6da76', jp: 'メール', en: ['Email'], furi: [], notes: [], tags: ['tech', 'katakana'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.257Z', updatedAt: '2024-02-08T20:08:07.163Z',
}, {
  id: '2c5d2373-6f32-436a-b4dd-412f3c0f1a5d', jp: '閉める', en: ['Shut', 'Close'], furi: ['し', '', ''], notes: [], tags: ['kanji', '一段'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-26T14:47:43.218Z', updatedAt: '2024-03-03T20:09:56.848Z',
}, {
  id: '762a056f-88f6-49e8-b1cb-85614453b70c', jp: 'コーチ', en: ['Coach'], furi: [], notes: [], tags: ['katakana', 'occupation'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-19T22:53:03.440Z', updatedAt: '2024-02-28T12:43:10.648Z',
}, {
  id: '675d3a38-6435-4e96-994e-d6b16b5c7bae', jp: '新しい', en: ['New'], furi: ['あたら'], notes: [], tags: ['kanji', 'い-adjective'], hits: 2, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.435Z', updatedAt: '2024-03-03T21:24:57.417Z',
}, {
  id: '48e804cd-8b79-4727-bd46-2f4132453229', jp: '兄', en: ['Older brother'], furi: ['あに'], notes: [], tags: ['family', 'kanji'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.474Z', updatedAt: '2024-02-28T20:18:56.368Z',
}, {
  id: 'a6be8e0c-486a-4dc9-9ad3-d307e8fa24d8', jp: 'おねがいし', en: ['Need '], furi: [], notes: [], tags: ['verb'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-13T21:07:34.038Z', updatedAt: '2024-02-20T22:26:46.261Z',
}, {
  id: '444188ac-6ddb-47e9-b0d8-37375c1730f5', jp: 'マレーシア', en: ['Malasya'], furi: [], notes: [], tags: ['katakana', 'country'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-20T00:19:34.978Z', updatedAt: '2024-02-20T00:19:34.978Z',
}, {
  id: '2e9fccce-c216-44d0-8bbc-c26596d863fc', jp: 'でも', en: ['But'], furi: [], notes: ['Use at begining of new sentence'], tags: ['other', 'formality'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-26T21:59:49.425Z', updatedAt: '2024-02-26T21:59:49.425Z',
}, {
  id: 'e62aa884-8989-4f8e-a7d6-028a1880a87d', jp: 'バス', en: ['Bus'], furi: [], notes: [], tags: ['transport', 'katakana'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T21:13:24.412Z', updatedAt: '2024-02-04T21:13:24.412Z',
}, {
  id: 'b1311484-ad9d-4dfb-85c6-89471736799d', jp: 'おなか', en: ['Stomach'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 2, difficulty: 0, createdAt: '2024-02-23T21:34:32.336Z', updatedAt: '2024-03-02T18:21:48.476Z',
}, {
  id: '9f7cd7e6-d5e2-4671-8125-97a24e594ec7', jp: 'どの', en: ['Which', 'Any', 'Each'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-05T20:44:26.795Z', updatedAt: '2024-02-08T21:38:48.953Z',
}, {
  id: '252d7ddd-b82c-4485-afac-e01ddec98446', jp: 'お嬢さん', en: ['Daughter'], furi: ['', 'じょう', '', ''], notes: [], tags: ['kanji', 'family'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-22T17:27:08.507Z', updatedAt: '2024-02-22T17:27:08.507Z',
}, {
  id: '539c0f60-cf79-4448-ab3f-f168af2ea5ec', jp: '多分', en: ['Probably', 'Maybe', 'Supposedly'], furi: ['た', 'ぶん'], notes: [], tags: ['other', 'kanji'], hits: 0, misses: 1, difficulty: 0, createdAt: '2024-02-04T11:36:28.405Z', updatedAt: '2024-02-28T20:11:12.440Z',
}, {
  id: '895862e7-596a-4967-a82a-2107c0ce8c5a', jp: '時間', en: ['Hours'], furi: ['じ', 'かん'], notes: [], tags: ['kanji', 'time'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-05T20:52:42.924Z', updatedAt: '2024-02-28T20:12:58.894Z',
}, {
  id: '6fbd88c1-4727-4523-bb83-d50fac8dbd1d', jp: '友達', en: ['Friends'], furi: ['とも', 'だち'], notes: [], tags: ['person', 'kanji'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.268Z', updatedAt: '2024-02-20T19:16:35.100Z',
}, {
  id: 'fa94a619-e42c-4037-ba61-7ca63eebac88', jp: 'さむい', en: ['Cold'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-18T01:26:07.712Z', updatedAt: '2024-02-18T01:26:07.712Z',
}, {
  id: '95f8a297-56c2-425e-8c56-3b38c7b7b686', jp: 'ピンク', en: ['Pink'], furi: [], notes: [], tags: ['katakana', 'other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-20T13:49:48.138Z', updatedAt: '2024-02-20T13:49:48.138Z',
}, {
  id: '2d385232-4c6f-430a-832e-4be6a2317ddf', jp: '寿司', en: ['Sushi'], furi: ['す', 'し'], notes: [], tags: ['food', 'noun', 'kanji'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.371Z', updatedAt: '2024-02-28T20:10:42.765Z',
}, {
  id: 'e867fa8e-7071-465b-925e-1af8197c9a31', jp: 'じんじゃ', en: ['Shrine'], furi: [], notes: [], tags: ['other', 'place'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-10T22:00:04.860Z', updatedAt: '2024-02-28T12:31:25.397Z',
}, {
  id: '1d32b3d1-5ca7-4626-961b-cca1c2d17bd3', jp: '何', en: ['What'], furi: ['なに'], notes: [], tags: ['other', 'kanji'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.408Z', updatedAt: '2024-02-26T10:50:42.785Z',
}, {
  id: 'c8be36b7-226b-4f67-8a42-02919f16d822', jp: 'やさい', en: ['Vegetables'], furi: [], notes: [], tags: ['food'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-23T21:36:27.678Z', updatedAt: '2024-02-23T21:36:27.678Z',
}, {
  id: '538b7347-fad4-4c9c-b5a6-5162b99800ba', jp: 'うどん', en: ['Udon'], furi: [], notes: [], tags: ['food'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.242Z', updatedAt: '2024-02-04T11:36:28.242Z',
}, {
  id: '68e132db-ea4c-4a52-88ee-8e73cb43188f', jp: 'スーパー', en: ['Supermarket'], furi: [], notes: [], tags: ['katakana', 'place'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-20T18:09:49.250Z', updatedAt: '2024-02-20T18:09:49.250Z',
}, {
  id: '8a3bf3d0-8ca4-411f-af88-b4cc9dd83c2f', jp: '小さい', en: ['Small', 'Little'], furi: ['ちい'], notes: [], tags: ['adjective', 'kanji'], hits: 3, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.279Z', updatedAt: '2024-02-28T12:38:16.150Z',
}, {
  id: '9dd5a225-3181-41e8-a307-a0753b26360c', jp: 'いっかい', en: ['First floor'], furi: [], notes: [], tags: ['other', 'place'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.399Z', updatedAt: '2024-02-04T15:18:40.343Z',
}, {
  id: 'a4219cff-c2ea-4d31-9247-0782242177eb', jp: 'バステい', en: ['Bus stop'], furi: [], notes: [], tags: ['transport', 'katakana'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.434Z', updatedAt: '2024-02-04T11:36:28.434Z',
}, {
  id: '901e510b-421b-45c6-80f2-e4a0e6bedc1e', jp: '主人', en: ['Husband'], furi: ['しゅ', 'じん'], notes: [], tags: ['kanji', 'family'], hits: 0, misses: 1, difficulty: 0, createdAt: '2024-02-22T17:10:53.156Z', updatedAt: '2024-02-28T21:20:03.302Z',
}, {
  id: 'fad12978-488d-42a5-9e08-50fe26e2d83f', jp: 'りんご', en: ['Apple'], furi: [], notes: [], tags: ['food'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-20T13:47:19.870Z', updatedAt: '2024-03-02T18:21:59.494Z',
}, {
  id: '336c3f76-ee94-4438-9faa-1d61457eff87', jp: 'かいだん', en: ['Stairs', 'Staircase', 'Stairwell'], furi: [], notes: [], tags: ['other', 'noun'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.435Z', updatedAt: '2024-03-02T18:16:25.071Z',
}, {
  id: 'efe15643-19c7-4464-995d-a0308ac03d32', jp: 'いくら', en: ['How (much)'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.251Z', updatedAt: '2024-02-04T11:36:28.251Z',
}, {
  id: '6b2485d7-f9b6-4ae3-87e0-86e850bed9ba', jp: 'テレビ', en: ['TV'], furi: [], notes: [], tags: ['tech', 'katakana'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.468Z', updatedAt: '2024-02-27T13:23:47.679Z',
}, {
  id: 'd028481a-a8ba-466f-ae77-1421c5c596d9', jp: '高い', en: ['Expensive', 'Big', 'Tall'], furi: ['たか'], notes: [], tags: ['adjective', 'kanji'], hits: 2, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.236Z', updatedAt: '2024-02-16T13:30:02.260Z',
}, {
  id: '821ba0df-4bd1-4f04-b824-8c3d987d627c', jp: '小学生', en: ['Elementary school student'], furi: ['しょう', 'がく', 'せい'], notes: [], tags: ['kanji', 'person', 'school'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-27T19:31:38.472Z', updatedAt: '2024-02-27T19:31:38.472Z',
}, {
  id: 'a4416efa-e1ae-4a46-8ed2-a346f3b2de7d', jp: 'かわいい', en: ['Cute', 'Cuter', 'Pretty'], furi: [], notes: [], tags: ['adjective'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.472Z', updatedAt: '2024-02-27T13:32:26.223Z',
}, {
  id: '5443293d-2967-4a1f-addc-8ce9e7d4a6e9', jp: '犬', en: ['Dog'], furi: ['いぬ'], notes: [], tags: ['other', 'kanji'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-20T13:46:51.450Z', updatedAt: '2024-02-20T13:47:47.473Z',
}, {
  id: '1c0b1bc7-6138-4028-bda4-76d88cc8bf20', jp: 'いる', en: ['Is', 'Exist'], furi: [], notes: [], tags: ['other', 'verb'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-19T19:58:32.681Z', updatedAt: '2024-02-28T12:37:56.795Z',
}, {
  id: '0c183eab-6587-4cad-8440-58d19bfdb875', jp: 'どういたしまして', en: ['Youre welcome'], furi: [], notes: [], tags: ['formality'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-20T18:16:01.191Z', updatedAt: '2024-02-20T18:16:01.191Z',
}, {
  id: '9a8cae56-9ed2-4d66-8b69-e1d7437bc2cf', jp: '七時', en: ['Seven o clock'], furi: ['しち', 'じ'], notes: [], tags: ['time', 'kanji', 'other'], hits: 4, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.531Z', updatedAt: '2024-03-02T18:19:04.789Z',
}, {
  id: 'c3b887e7-36b1-4e6d-9c5e-b12d2c4ec0ec', jp: '日曜日', en: ['Sunday'], furi: ['にち', 'よう', 'び'], notes: [], tags: ['kanji'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.527Z', updatedAt: '2024-02-15T20:52:21.320Z',
}, {
  id: '3ff11c5c-3126-4beb-a26b-9a457c43b516', jp: 'どんな', en: ['What kind of', 'What sort of', 'Wht type of'], furi: [], notes: [], tags: ['formality'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.498Z', updatedAt: '2024-02-28T17:23:10.345Z',
}, {
  id: '6c06ac76-85db-4431-b36a-35f5175306ca', jp: 'ゆき', en: ['Snowy', 'Snow'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-16T16:36:24.596Z', updatedAt: '2024-02-16T16:36:24.596Z',
}, {
  id: '0b99f917-ecf8-4448-963f-5dd585aeb89d', jp: '八', en: ['Eight'], furi: ['はち'], notes: [], tags: ['noun', 'kanji'], hits: 3, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.527Z', updatedAt: '2024-02-28T20:15:02.088Z',
}, {
  id: '1f4acea4-7e0c-4efc-bde1-04fb3226f446', jp: 'けっこう', en: ['No thanks', 'Im fine'], furi: [], notes: ['Add [です]'], tags: ['other', 'formality'], hits: 0, misses: 1, difficulty: 0, createdAt: '2024-02-26T22:07:21.422Z', updatedAt: '2024-02-28T17:22:50.308Z',
}, {
  id: 'b344d4a9-3fb3-4c59-8e12-054452e943e8', jp: 'に', en: ['To', 'In', 'As (a)', 'At'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.279Z', updatedAt: '2024-02-14T13:27:31.683Z',
}, {
  id: 'a482e954-1a03-4f14-ad81-b0662fba477d', jp: '青', en: ['Blue'], furi: ['あお', ''], notes: [], tags: ['noun', 'kanji'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.257Z', updatedAt: '2024-02-29T10:43:36.285Z',
}, {
  id: '42816dc1-469f-40d5-80cb-712034c890d3', jp: 'いいですね', en: ['Sounds good'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.404Z', updatedAt: '2024-02-04T11:36:28.404Z',
}, {
  id: '0f105f8d-8553-46c3-be32-0ed70dae359f', jp: 'かれし', en: ['Boyfriend'], furi: [], notes: [], tags: ['person'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.526Z', updatedAt: '2024-02-04T11:36:28.526Z',
}, {
  id: '08b087f7-d54a-4756-9adc-54faff644404', jp: 'スポーツ', en: ['Sports'], furi: [], notes: [], tags: ['sport', 'katakana'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.526Z', updatedAt: '2024-02-04T11:36:28.526Z',
}, {
  id: 'd9f0a902-46c6-4b78-b124-22bab85519e2', jp: 'こちら', en: ['This', 'This way', 'Over here'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.470Z', updatedAt: '2024-02-04T11:36:28.470Z',
}, {
  id: '1ddb550a-447a-4b65-bc35-76a3583839fe', jp: '全然', en: ['Never'], furi: ['ぜん', 'ぜん'], notes: [], tags: ['kanji', 'other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-28T11:03:59.934Z', updatedAt: '2024-02-28T11:03:59.934Z',
}, {
  id: '8ac82883-d8a5-451b-8154-5f4656ae89df', jp: '上がる', en: ['To go up', 'Rise'], furi: ['あ', '', ''], notes: [], tags: ['kanji', '五段'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-26T14:44:06.654Z', updatedAt: '2024-03-03T20:15:28.015Z',
}, {
  id: '46efb981-32a9-4d1a-94b3-ff8528f63272', jp: '帽子', en: ['Hat'], furi: ['ぼう', 'し'], notes: [], tags: ['noun', 'kanji'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.496Z', updatedAt: '2024-03-02T18:29:44.010Z',
}, {
  id: '9f4b5c13-db5e-474e-8f8a-72da180425af', jp: 'よっつ', en: ['Four', 'Four of something'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.468Z', updatedAt: '2024-02-04T11:36:28.468Z',
}, {
  id: 'aeb152bc-92ad-4c61-bc68-4aabb858c29a', jp: 'おみやげ', en: ['Souvenir'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-10T22:07:49.716Z', updatedAt: '2024-03-02T18:17:09.930Z',
}, {
  id: '67de739f-bcaa-4a62-9013-3313018a79c3', jp: 'あさって', en: ['Day after tomorrow'], furi: [], notes: [], tags: ['time'], hits: 0, misses: 1, difficulty: 0, createdAt: '2024-02-27T21:34:46.411Z', updatedAt: '2024-02-28T12:38:20.666Z',
}, {
  id: '7f24e9bc-be13-4be5-b283-9bb3218feff3', jp: 'アクション', en: ['Action'], furi: [], notes: [], tags: ['entertainment', 'katakana'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.475Z', updatedAt: '2024-02-04T11:36:28.475Z',
}, {
  id: 'c877410c-98ec-4f66-b796-7e97076ab19b', jp: 'ごろ', en: ['Similar', 'Around', 'Like'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.277Z', updatedAt: '2024-02-04T11:36:28.277Z',
}, {
  id: '0ed2eba4-6323-4688-a1ed-04e291bc1659', jp: 'とし', en: ['City'], furi: [], notes: [], tags: ['place', 'noun'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.251Z', updatedAt: '2024-02-27T13:24:55.235Z',
}, {
  id: 'ebd500d6-c708-40f2-ad25-dfa2563d2c21', jp: 'どこ', en: ['Where'], furi: [], notes: [], tags: ['other', 'place'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.468Z', updatedAt: '2024-02-04T11:36:28.468Z',
}, {
  id: '21a08982-4f34-4d53-98c5-51a075883f71', jp: 'とても', en: ['Very'], furi: [], notes: [], tags: ['adjective'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.399Z', updatedAt: '2024-02-04T11:36:28.399Z',
}, {
  id: '1c247488-3b15-42c2-8214-338d97fe5f91', jp: 'スマホ', en: ['Smartphone'], furi: [], notes: [], tags: ['tech', 'katakana'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.281Z', updatedAt: '2024-03-02T18:18:22.876Z',
}, {
  id: '09d17530-7d3d-4a38-b368-881a7d54260d', jp: 'けれども', en: ['But'], furi: [], notes: ['Also less polite [けど]'], tags: [], hits: 0, misses: 1, difficulty: 0, createdAt: '2024-02-26T22:02:53.515Z', updatedAt: '2024-02-27T13:31:49.310Z',
}, {
  id: '37708844-ac6e-4894-89a4-5e7f18706ec8', jp: 'そう', en: ['So'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-27T21:50:34.015Z', updatedAt: '2024-02-27T21:50:34.015Z',
}, {
  id: 'c93bab67-3354-45c6-8740-8141999f628d', jp: '欲しい', en: ['Want'], furi: ['ほ', '', ''], notes: [], tags: ['kanji', 'adjective'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.287Z', updatedAt: '2024-02-28T11:12:30.831Z',
}, {
  id: '474ae1c6-95af-43c0-b36f-76feea694477', jp: '昼', en: ['Middle of the day'], furi: ['ひる'], notes: [], tags: ['kanji', 'time'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-28T10:41:22.750Z', updatedAt: '2024-02-28T10:41:22.750Z',
}, {
  id: 'ee32e438-2e9a-4745-8442-f308c9cc20ad', jp: 'ですね', en: ['Isnt it', 'Right', 'Are'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.470Z', updatedAt: '2024-02-28T12:40:59.153Z',
}, {
  id: '9c509e99-20e0-4931-9a06-0f61a376fba4', jp: 'チケット', en: ['Ticket'], furi: [], notes: [], tags: ['katakana', 'other', 'transport'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-22T18:53:59.283Z', updatedAt: '2024-02-28T12:42:17.592Z',
}, {
  id: 'e2424013-31b8-4b03-9ec4-e1b670dd901e', jp: '書く', en: ['Write'], furi: ['か', ''], notes: [], tags: ['kanji', '五段'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-21T10:57:40.356Z', updatedAt: '2024-03-03T16:00:29.494Z',
}, {
  id: '1bcdfa07-f3a2-45ea-9c49-79c10fb4cf5a', jp: 'ちず', en: ['Map'], furi: [], notes: [], tags: ['noun'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.405Z', updatedAt: '2024-03-02T18:15:12.420Z',
}, {
  id: '2133fd2a-3c2c-4bd8-ae46-2171a7e59fff', jp: '毎朝', en: ['Every morning'], furi: ['まい', 'あさ'], notes: [], tags: ['time', 'kanji'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.399Z', updatedAt: '2024-02-28T10:39:04.610Z',
}, {
  id: '4b3376a8-44d2-469b-8cd0-9b88feff8974', jp: '大学', en: ['University', 'College'], furi: ['だい', 'がく', '', ''], notes: [], tags: ['school', 'place', 'kanji'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.534Z', updatedAt: '2024-02-28T21:19:13.617Z',
}, {
  id: '78f77027-530d-4814-b652-ac2271e01db6', jp: 'おてあらい', en: ['Restroom'], furi: [], notes: [], tags: ['place'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.438Z', updatedAt: '2024-02-04T11:36:28.438Z',
}, {
  id: 'cf7cee9e-8b8b-49b7-b4ab-a32e6f36869d', jp: 'アルバイト', en: ['Partime job'], furi: [], notes: [], tags: ['katakana', 'other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-22T18:11:13.226Z', updatedAt: '2024-02-22T18:11:13.226Z',
}, {
  id: 'ef6c7e6f-0b48-49a2-b533-2e74e4e49cf0', jp: '東京', en: ['Tokyo'], furi: ['とう', 'きょう'], notes: [], tags: ['place', 'kanji'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.496Z', updatedAt: '2024-02-04T11:36:28.496Z',
}, {
  id: '88728828-9621-40a9-b46d-eb2a868466e3', jp: 'きれい', en: ['Clean', 'Pretty', 'Beautiful '], furi: [], notes: [], tags: ['な-adjective'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.399Z', updatedAt: '2024-03-03T21:25:35.568Z',
}, {
  id: 'be9d1821-6db8-4a34-8239-3a1ae1e72284', jp: 'ちょっと', en: ['I dont really like', 'Doesnt work very well'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.270Z', updatedAt: '2024-02-04T11:36:28.270Z',
}, {
  id: '306b93a2-a860-4db9-8f21-adda0d7b7e07', jp: '大学生', en: ['College studen'], furi: ['だい', 'がく', 'せい'], notes: [], tags: ['school', 'occupation', 'person', 'kanji'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.298Z', updatedAt: '2024-02-27T19:17:25.648Z',
}, {
  id: '89b3c842-9e1d-42f5-ae8e-134dbe3047de', jp: 'ほんだな', en: ['Bookshelf'], furi: [], notes: [], tags: ['noun'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.298Z', updatedAt: '2024-03-02T18:15:58.481Z',
}, {
  id: '557ce975-0cfb-4eb1-822e-dc2093100eec', jp: 'おはし', en: ['Chopsticks'], furi: [], notes: [], tags: ['food'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-23T21:33:26.039Z', updatedAt: '2024-03-02T18:17:03.953Z',
}, {
  id: '7b7ee6d1-982a-43ad-a066-cf581d730ba5', jp: 'みそしる', en: ['Miso soup'], furi: [], notes: [], tags: ['food'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.438Z', updatedAt: '2024-02-28T17:23:20.796Z',
}, {
  id: '96956f84-780b-4f48-9c0a-94b200cc6b03', jp: 'ゴミばこ', en: ['Trash can'], furi: [], notes: [], tags: ['other', 'katakana'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.434Z', updatedAt: '2024-02-27T13:32:35.374Z',
}, {
  id: '36390607-5c62-4377-8605-2133151fab72', jp: 'ふたつ', en: ['Two', 'Two of something'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.273Z', updatedAt: '2024-02-04T11:36:28.273Z',
}, {
  id: 'e120e89d-eec1-48d1-b5ad-c65dfc2cb4fd', jp: 'れんあい', en: ['Romance'], furi: [], notes: [], tags: ['entertainment'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.500Z', updatedAt: '2024-02-04T11:36:28.500Z',
}, {
  id: '21ffe8d4-b7b4-44e1-95df-3de8f89ba22c', jp: 'じはんち', en: ['Vending machines'], furi: [], notes: [], tags: ['tech'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.497Z', updatedAt: '2024-03-02T18:16:06.905Z',
}, {
  id: 'b25bf6d9-4100-485a-8189-1e4a1390f9ca', jp: '姉', en: ['Older sister'], furi: ['あね'], notes: [], tags: ['family', 'kanji'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.537Z', updatedAt: '2024-02-22T16:38:05.473Z',
}, {
  id: '39253495-5abc-42c3-9fc8-3e11e405432c', jp: '人', en: ['Person', 'People', 'Person counter [にん]'], furi: ['ひと'], notes: [], tags: ['person', 'noun', 'kanji'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.371Z', updatedAt: '2024-02-28T20:15:25.740Z',
}, {
  id: 'c435996b-8b86-484e-a730-42d5f04d3a02', jp: '好き', en: ['Like'], furi: ['す'], notes: [], tags: ['kanji', 'な-adjective'], hits: 2, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.438Z', updatedAt: '2024-03-03T21:28:32.933Z',
}, {
  id: 'f2283d5a-13db-4f7a-92f8-56918186cefd', jp: 'おこさん', en: ['Kid'], furi: [], notes: [], tags: ['other', 'person'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-20T00:27:05.746Z', updatedAt: '2024-02-20T00:27:05.746Z',
}, {
  id: 'dc9b7cba-9f57-4ffb-bd54-6faf0627c4db', jp: 'かいしゃいん', en: ['Office worker'], furi: [], notes: [], tags: ['occupation', 'person', 'noun'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.249Z', updatedAt: '2024-02-04T11:36:28.249Z',
}, {
  id: '4cdf80ef-9c3c-4ac9-85b5-2b2c544e5474', jp: '白', en: ['White'], furi: ['しろ'], notes: [], tags: ['noun', 'kanji'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.409Z', updatedAt: '2024-02-29T14:46:12.622Z',
}, {
  id: '8856e35d-d3b0-4bb4-a9c6-9f7ca399b992', jp: 'べんとう', en: ['Boxed lunch'], furi: [], notes: [], tags: ['food', 'noun'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.527Z', updatedAt: '2024-02-27T13:26:11.279Z',
}, {
  id: 'b7babb19-f293-41ec-95c5-46e2b1e4f1f9', jp: 'お~', en: ['Honorific for others'], furi: [], notes: [], tags: ['formality'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-22T17:58:06.976Z', updatedAt: '2024-02-22T17:58:06.976Z',
}, {
  id: 'c6a86f29-87af-4f9b-95f5-654ab3152250', jp: '祖父', en: ['Grandfather'], furi: ['そ', 'ふ'], notes: [], tags: ['kanji', 'family'], hits: 2, misses: 0, difficulty: 0, createdAt: '2024-02-22T17:21:45.496Z', updatedAt: '2024-03-02T18:21:54.603Z',
}, {
  id: '87c38cfc-8e12-48eb-81eb-5a94b17b045f', jp: 'から', en: ['Because', 'So'], furi: [], notes: ['Used to join two sentences', 'X happened so I did Y'], tags: ['other', 'formality'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-26T22:04:19.609Z', updatedAt: '2024-02-26T22:04:19.609Z',
}, {
  id: '293b4ab2-a19e-4ed8-9ed4-16d9a1375c9f', jp: '先週', en: ['Last week'], furi: ['せん', 'しゅう'], notes: [], tags: ['kanji', 'time'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-23T21:58:43.838Z', updatedAt: '2024-02-23T21:58:43.838Z',
}, {
  id: 'ba7d5330-45d2-4026-ba59-fcb5c20a4140', jp: '泳ぐ', en: ['Swim'], furi: ['およ', ''], notes: [], tags: ['kanji', '五段'], hits: 2, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.256Z', updatedAt: '2024-03-03T20:11:28.228Z',
}, {
  id: '9cdd4024-6f2a-4fd6-92c4-fbaaa70a408a', jp: '半', en: ['Thirty', 'Half'], furi: ['はん'], notes: [], tags: ['time', 'kanji', 'other'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.497Z', updatedAt: '2024-02-15T20:49:07.290Z',
}, {
  id: 'cb1d799b-cde2-4615-a59c-2d46932150f6', jp: 'お子さん', en: ['Children'], furi: ['', 'こ', '', ''], notes: [], tags: ['kanji', 'family'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-22T17:30:08.246Z', updatedAt: '2024-02-22T17:30:08.246Z',
}, {
  id: 'd1cdffa5-0b43-4223-9bd5-829444b23f0d', jp: 'お祖母さん', en: ['Grandmother'], furi: ['', 'ば', 'あ', ''], notes: [], tags: ['kanji', 'family'], hits: 2, misses: 0, difficulty: 0, createdAt: '2024-02-20T23:00:13.079Z', updatedAt: '2024-02-28T21:22:49.487Z',
}, {
  id: '32c338a6-4b31-495e-99ab-ad4ce3a49dad', jp: '女の子', en: ['Girl'], furi: ['おんな', '', 'こ'], notes: [], tags: ['kanji', 'person'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-26T21:53:23.607Z', updatedAt: '2024-02-28T20:13:36.665Z',
}, {
  id: '9a156461-01eb-4f6f-afbc-4d9a12c0e98b', jp: '終わり', en: ['End'], furi: ['お', '', ''], notes: [], tags: ['kanji', 'time'], hits: 0, misses: 1, difficulty: 0, createdAt: '2024-02-28T10:46:36.068Z', updatedAt: '2024-02-28T20:14:46.393Z',
}, {
  id: '4368b462-180b-4861-8770-5dc2609ffcb1', jp: '日', en: ['Day'], furi: ['ひ'], notes: ['ひ, にち'], tags: ['kanji', 'time'], hits: 2, misses: 0, difficulty: 0, createdAt: '2024-02-17T17:37:39.294Z', updatedAt: '2024-02-28T21:22:56.997Z',
}, {
  id: 'a0531bc6-763f-4a9e-b519-05e8ca0cea46', jp: 'どうぶつ', en: ['Animal'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-28T21:38:05.572Z', updatedAt: '2024-02-28T21:38:05.572Z',
}, {
  id: '873c9271-54e2-4322-be49-ba72a1f02499', jp: '一', en: ['One', 'An', 'A'], furi: ['いち'], notes: [], tags: ['noun', 'kanji'], hits: 2, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.439Z', updatedAt: '2024-02-28T21:21:58.553Z',
}, {
  id: '0dd27bbf-02e9-416c-b8cd-7e2649b98165', jp: 'でんわばんごう', en: ['Phone number'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-13T21:15:58.693Z', updatedAt: '2024-02-13T21:15:58.693Z',
}, {
  id: '105dd43f-007b-45ea-8b6b-ecc723031f06', jp: 'おおさか', en: ['Osaka'], furi: [], notes: [], tags: ['place', 'noun'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.474Z', updatedAt: '2024-02-04T11:36:28.474Z',
}, {
  id: '9596f471-fc69-44a6-80aa-fcb7634169eb', jp: '磨く', en: ['Clean', 'Polish'], furi: ['みが', ''], notes: [], tags: ['kanji', '五段'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-23T21:44:58.550Z', updatedAt: '2024-03-03T20:13:12.062Z',
}, {
  id: 'a8bae00c-87ae-4cc3-aeef-d991cf9306c3', jp: '口', en: ['Mouth'], furi: ['ぐち'], notes: [], tags: ['kanji'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-15T21:56:33.911Z', updatedAt: '2024-02-28T12:31:10.953Z',
}, {
  id: '861ecddc-7572-4939-aa4c-95ab7895e1c6', jp: '甘い', en: ['Sweet'], furi: ['あま', ''], notes: [], tags: ['kanji', 'い-adjective'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-28T21:32:39.185Z', updatedAt: '2024-03-03T21:24:43.640Z',
}, {
  id: '3b010408-8a28-4e68-9ba0-1b5c4b60d94a', jp: 'あたたかい', en: ['Warm', 'Hot'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-16T16:36:05.075Z', updatedAt: '2024-02-16T16:36:05.075Z',
}, {
  id: 'c498d957-05d6-4143-b8f3-efb51f6c7229', jp: 'カフェ', en: ['Cafe'], furi: [], notes: ['Todo fix he katakana'], tags: ['other', 'place', 'katakana'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.531Z', updatedAt: '2024-02-04T11:36:28.531Z',
}, {
  id: 'f053a008-73a6-4091-85bc-f30cc149bc51', jp: 'サイズ', en: ['Size'], furi: [], notes: [], tags: ['katakana', 'other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-26T21:56:00.160Z', updatedAt: '2024-02-26T21:56:00.160Z',
}, {
  id: '601f8dd9-5b9f-42b6-a078-acc01e13a6a9', jp: '本', en: ['Books'], furi: ['ほん'], notes: [], tags: ['entertainment', 'noun', 'kanji'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.469Z', updatedAt: '2024-03-02T18:15:52.522Z',
}, {
  id: '8e56e768-5b72-42b4-8d78-2800f0624c82', jp: 'コンセント', en: ['Outlet'], furi: [], notes: [], tags: ['tech', 'katakana'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.257Z', updatedAt: '2024-02-04T11:36:28.257Z',
}, {
  id: '478278b9-42cb-4bc3-ab0f-890337c303fe', jp: 'コラ', en: ['Cola'], furi: [], notes: [], tags: ['katakana', 'food'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-22T18:12:00.088Z', updatedAt: '2024-02-22T18:12:00.088Z',
}, {
  id: 'f2a24728-5d06-4cb9-b2b5-342857ef9611', jp: '電車', en: ['Train'], furi: ['でん', 'しゃ'], notes: [], tags: ['transport'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T21:01:10.827Z', updatedAt: '2024-02-21T21:08:17.222Z',
}, {
  id: '8a42e3a2-df4b-4175-8081-289936282f0c', jp: 'いつ', en: ['When', 'What time'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.259Z', updatedAt: '2024-02-28T17:22:31.822Z',
}, {
  id: '5b2fb6f5-8541-4fc7-8246-c56f5d61d035', jp: 'はじめまして', en: ['Nice to meet you'], furi: [], notes: [], tags: ['other', 'formality'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.256Z', updatedAt: '2024-02-04T11:36:28.256Z',
}, {
  id: 'c09384c4-cf27-44f6-b694-8718c3ac5a6f', jp: '有名', en: ['Famous'], furi: ['ゆう', 'めい'], notes: [], tags: ['kanji', 'な-adjective'], hits: 0, misses: 1, difficulty: 0, createdAt: '2024-02-04T11:36:28.471Z', updatedAt: '2024-03-03T21:26:10.937Z',
}, {
  id: '6adcc2d8-bc85-4f7b-9c7e-71279bbc2ca8', jp: '赤', en: ['Red'], furi: ['あか'], notes: [], tags: ['noun', 'kanji'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.501Z', updatedAt: '2024-02-28T21:23:26.973Z',
}, {
  id: 'cd8d63b6-b17d-439d-be6a-35aedb77d981', jp: '中学生', en: ['Middleschool student'], furi: ['ちゅう', 'がく', 'せい'], notes: [], tags: ['kanji', 'person', 'school'], hits: 2, misses: 0, difficulty: 0, createdAt: '2024-02-27T19:33:39.781Z', updatedAt: '2024-02-28T20:12:04.197Z',
}, {
  id: '800924b7-8733-420f-a5e7-aff75c5ce427', jp: '学校', en: ['School'], furi: ['がっ', 'こう'], notes: [], tags: ['kanji', 'school'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-20T22:53:06.771Z', updatedAt: '2024-02-20T22:53:06.771Z',
}, {
  id: 'ac4ed0fd-1dc2-4037-b4ed-9e39d67fc1df', jp: '出かける', en: ['Go out', 'Leave home'], furi: ['で', '', '', ''], notes: [], tags: ['kanji', '一段'], hits: 2, misses: 2, difficulty: 0, createdAt: '2024-02-04T11:36:28.496Z', updatedAt: '2024-03-03T20:15:00.618Z',
}, {
  id: '69526843-95b6-424d-b756-35e384b42be5', jp: '英語', en: ['English language'], furi: ['えい', 'ご'], notes: [], tags: ['other', 'kanji'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-20T00:13:50.137Z', updatedAt: '2024-02-25T14:57:47.156Z',
}, {
  id: 'fa6a5954-c057-40ac-a057-831dec693dcd', jp: '歳', en: ['Years old', '(n) of age'], furi: ['さい'], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.263Z', updatedAt: '2024-02-26T21:46:12.596Z',
}, {
  id: 'c53f1ffe-6528-47cc-9d45-07c5cd705179', jp: 'くすり', en: ['Medicine'], furi: [], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-13T21:31:25.953Z', updatedAt: '2024-02-13T21:31:25.953Z',
}, {
  id: '63ff6a51-a39a-4140-9721-5529427aadb3', jp: 'です', en: ['Is'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.400Z', updatedAt: '2024-02-28T12:37:29.840Z',
}, {
  id: '50559aab-c74b-4f2f-9d14-d8c163c6dbb7', jp: 'れいぞうこ', en: ['Fridge'], furi: [], notes: [], tags: ['tech', 'noun'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.277Z', updatedAt: '2024-03-02T18:18:00.367Z',
}, {
  id: '783fe067-b603-4dcd-b3e2-2a63097d9aef', jp: 'つ', en: ['Counter for non living things (small)'], furi: [''], notes: [], tags: ['other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-26T21:48:12.007Z', updatedAt: '2024-02-26T21:48:12.007Z',
}, {
  id: 'c54641ad-adb8-4b9a-9f1b-08396d4f4918', jp: '浴びる', en: ['Bathe', 'Take (a shower)'], furi: ['あ', ''], notes: [], tags: ['kanji', '一段'], hits: 3, misses: 3, difficulty: 0, createdAt: '2024-02-04T11:36:28.527Z', updatedAt: '2024-03-03T17:14:03.310Z',
}, {
  id: '133ab34f-c5bb-4134-8576-6adc25faa12e', jp: '空く', en: ['Become empty'], furi: ['す', ''], notes: [], tags: ['kanji', '五段'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-23T21:46:19.493Z', updatedAt: '2024-03-03T20:09:12.149Z',
}, {
  id: '56de1a4b-c26b-40e7-bde5-0963a8e5967c', jp: 'すみません', en: ['Excuse me', 'Sorry'], furi: [], notes: [], tags: ['formality', 'other'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-04T11:36:28.275Z', updatedAt: '2024-02-04T11:36:28.275Z',
}, {
  id: 'ab1e3848-1dba-4793-b7a7-7862515a58b5', jp: '高校', en: ['Highschool'], furi: ['こう', 'こう'], notes: [], tags: ['kanji', 'school'], hits: 0, misses: 0, difficulty: 0, createdAt: '2024-02-27T19:21:22.200Z', updatedAt: '2024-02-27T19:21:22.200Z',
}];

export default WORDS_MOCK;
