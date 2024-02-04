const SENTENCES_MOCK = [{
  id: 'b2af9fde-bf8e-4d2b-b7fc-13ba2eefca2d', jp: 'あした 新しい ゲーム を 買います ', en: ['Im going to buy a new game tomorrow'], furi: [], notes: [], tags: ['verb', 'tech', 'entertainment'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-31T11:51:25.288Z', updatedAt: '2024-01-31T11:51:25.288Z',
}, {
  id: '5d136cdf-7610-4b75-ad3b-dd1210b764cb', jp: 'このぼうしはいくらですか', en: ['How much is this hat?'], furi: [], notes: [], tags: ['clothes'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T09:50:24.851Z', updatedAt: '2024-01-24T16:45:41.769Z',
}, {
  id: 'dc45ff6d-d89f-4781-ae58-8f2c63ed2e62', jp: 'はじめまして,おなまえは', en: ['Nice to meet you, whats your name?'], furi: [], notes: [], tags: ['formality'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T10:13:48.054Z', updatedAt: '2024-02-01T10:51:45.732Z',
}, {
  id: 'c4b9521d-15ee-43dc-a9a9-d7c8aac4c588', jp: 'まいにち大きいピザをたべますか', en: ['Do you eat a big pizza every day?'], furi: [], notes: [], tags: ['food', 'other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-22T11:17:19.276Z', updatedAt: '2024-01-24T16:46:14.938Z',
}, {
  id: '47f7f7d1-24a3-4cd7-999b-ab8aa3fbddfd', jp: 'すみません でんわ は ありません ', en: ['Sorry we dont have a phone'], furi: [], notes: [], tags: ['verb', 'other', 'tech'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-31T11:32:46.828Z', updatedAt: '2024-01-31T11:32:46.828Z',
}, {
  id: '1522c287-6317-4fc3-ad7f-afbda7ddb666', jp: 'まいばん ニュース を 見ます', en: ['I watch the news every night'], furi: [], notes: [], tags: ['entertainment', 'verb', 'other', 'kanji'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T23:42:55.482Z', updatedAt: '2024-01-24T16:46:20.649Z',
}, {
  id: '38eb7d0e-6568-447e-bc37-b1f12ddcd75c', jp: 'はい,日本にすんでいます', en: ['Yes I live in japan'], furi: [], notes: [], tags: ['place'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T10:10:21.812Z', updatedAt: '2024-01-24T16:46:43.184Z',
}, {
  id: '2b5b8798-4d60-4c5c-a118-a41ce4f2442c', jp: 'なおみさんのかさはいいですね', en: ['Naomis umbrella is nice isnt it'], furi: [], notes: [], tags: ['person', 'thing'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T09:55:24.577Z', updatedAt: '2024-01-24T16:48:40.776Z',
}, {
  id: 'a17611ce-0c08-43fe-8885-affdd40da22f', jp: 'このくろいコートはいくらですか', en: ['How much is this black coat'], furi: [], notes: [], tags: ['clothes'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T09:45:52.279Z', updatedAt: '2024-01-26T23:59:06.013Z',
}, {
  id: '2ee40262-3e85-43fe-9093-daa1b26fcda6', jp: 'どんな コーヒー がすき です か ', en: ['What kind of coffee do you like?'], furi: [], notes: [], tags: ['food', 'formality'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-02-01T21:46:50.720Z', updatedAt: '2024-02-01T21:46:50.720Z',
}, {
  id: 'c7ad02f0-cf98-4f0f-9896-af3a3c5418c3', jp: ' すみません, ゴミばこ は ありません ', en: ['Sorry we dont have a trash can'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-27T09:26:58.416Z', updatedAt: '2024-01-27T21:37:04.241Z',
}, {
  id: 'ba6f2be1-a625-47e3-92ab-8aa52fa88aae', jp: 'あした 何時 に ヨガ を します か ', en: ['What time are you doing yoga tomorrow'], furi: [], notes: [], tags: ['sport', 'verb', 'time'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-31T11:43:35.055Z', updatedAt: '2024-01-31T11:43:35.055Z',
}, {
  id: '9a1f42ce-c40f-40d8-8075-01d4c8c4959e', jp: 'まいばん本を読みます', en: ['I read books every night'], furi: [], notes: [], tags: ['other', 'verb', 'kanji', 'entertainment'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T23:54:17.270Z', updatedAt: '2024-01-27T00:03:35.107Z',
}, {
  id: 'dbdb4164-d986-46bb-b389-e3b1d6f266f2', jp: 'まいにち ともだち と あそびます ', en: ['I hang out with friends every day'], furi: [], notes: [], tags: ['person'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-24T22:15:34.778Z', updatedAt: '2024-01-24T22:15:34.778Z',
}, {
  id: '1b94c76a-190a-4f8c-939c-458a66dc8029', jp: 'らいしゅう けん さん と ゲーム を します ', en: ['Im goint to play video games with ken next week'], furi: [], notes: [], tags: ['tech', 'verb'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-31T11:45:26.208Z', updatedAt: '2024-01-31T11:45:26.208Z',
}, {
  id: 'c1e7a9f0-8260-4c3f-81ad-cd30187940ec', jp: 'ダニエル さん は ベトナム しゅっしん です ', en: ['Daniel is from vietnam'], furi: [], notes: [], tags: ['country', 'katakana', 'formality'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-02-03T13:33:24.177Z', updatedAt: '2024-02-03T13:33:24.177Z',
}, {
  id: 'f552a531-9844-40fb-8ae8-a1d8b3a14cd6', jp: 'まいにち 九時 ごろ シャワ を あびます ', en: ['I take a shower around 9 o clock every day'], furi: [], notes: [], tags: ['verb', 'time'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-31T11:49:31.169Z', updatedAt: '2024-01-31T11:49:31.169Z',
}, {
  id: '36cca697-1055-47d5-acbe-dd64ae84895e', jp: 'このサンドイッチはおいしいです', en: ['This sandwich is tasty'], furi: [], notes: [], tags: ['food', 'other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-22T11:16:11.937Z', updatedAt: '2024-01-24T16:49:44.201Z',
}, {
  id: 'd09c9dc1-f95a-441c-8dc6-29d0dbd96101', jp: 'たかいふくはちょっと', en: ['I dont really like expensive clothes'], furi: [], notes: [], tags: ['clothes'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T22:03:17.876Z', updatedAt: '2024-01-24T16:49:48.685Z',
}, {
  id: 'c39d110b-5171-46cc-89e5-d3e7f5014eec', jp: 'こんにちは マヌエル ト 言います ', en: ['Hello, my name is Manuel'], furi: [], notes: [], tags: ['formality', 'kanji'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-02-03T13:31:49.277Z', updatedAt: '2024-02-03T13:31:49.277Z',
}, {
  id: 'db189782-3f59-42a1-b0ea-9583b5670c34', jp: '私のひるごはんはどこですか', en: ['Where is my lunch?'], furi: [], notes: [], tags: ['food', 'person', 'other', 'kanji'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T23:31:29.043Z', updatedAt: '2024-01-24T16:49:53.675Z',
}, {
  id: 'fb303676-7a8e-4a58-a549-d19932c82c3f', jp: 'けんさんの新しいさいふはいいですね', en: ['Kens new wallet is nice isnt it'], furi: [], notes: [], tags: ['adjective', 'thing'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T09:52:12.199Z', updatedAt: '2024-01-24T16:49:58.006Z',
}, {
  id: '34ecaebf-0401-42fe-9a87-978bb4441db2', jp: 'この新しいくつはかわいいですね', en: ['This new shoes are cute arent they'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-22T22:15:28.076Z', updatedAt: '2024-01-24T16:50:02.281Z',
}, {
  id: 'defb8ca7-714a-425c-8088-494ed3b26387', jp: '中山さんは十一時半にサンドイッチをたべます', en: ['Mr. Nakayama eats a sandwich at eleven thirty'], furi: [], notes: [], tags: ['thing', 'person', 'time', 'food', 'other', 'kanji'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:58:47.641Z', updatedAt: '2024-01-24T16:50:08.478Z',
}, {
  id: 'df3c9a86-2879-4d08-9637-aefe1bca80a9', jp: '日本 の おんがく がすき です ', en: ['I like japanese music'], furi: [], notes: [], tags: ['entertainment', 'verb'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-02-01T21:49:00.298Z', updatedAt: '2024-02-01T21:49:00.298Z',
}, {
  id: '197394c4-6a39-4e29-82b5-8a5276067b4b', jp: 'それは私のばんごはんですか', en: ['Is that my dinner?'], furi: [], notes: [], tags: ['person', 'food', 'other', 'kanji'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-22T00:02:41.585Z', updatedAt: '2024-01-24T16:50:13.270Z',
}, {
  id: 'c6c9f9c5-06c2-4550-9ce6-afeb266bdb75', jp: 'すみません,これは百えんですか', en: ['Excuse me is this a hundred yen?'], furi: [], notes: [], tags: ['formality'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T22:11:05.193Z', updatedAt: '2024-02-01T10:51:11.861Z',
}, {
  id: '0c75328b-f92f-47bd-88f3-16322fe79259', jp: 'まいにちおいしいパンをたべます', en: ['I eat tasty bread every day'], furi: [], notes: [], tags: ['food', 'time', 'other', 'verb', 'katakana'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:58:47.655Z', updatedAt: '2024-01-27T00:01:48.307Z',
}, {
  id: '051de8a9-f679-4b53-a8bc-658d565c093e', jp: '中山さんはよくやきゅうをします', en: ['Ms. Nakayama often plays baseball'], furi: [], notes: [], tags: ['sport', 'person', 'other', 'verb', 'kanji'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:58:47.660Z', updatedAt: '2024-01-24T16:50:30.960Z',
}, {
  id: '2e5e9034-0481-4d6a-aca7-a272c29c03a2', jp: ' まいあさ 九時 に おきます', en: ["I get up at nine o'clock every morning."], furi: [], notes: [], tags: ['verb', 'other', 'time'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-30T11:22:02.188Z', updatedAt: '2024-01-30T11:22:02.188Z',
}, {
  id: 'bfc5e34b-8dab-4661-940f-3ef2d275453b', jp: '新しいテレビがほしいです', en: ['I want a new tv'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-22T22:25:39.404Z', updatedAt: '2024-01-24T16:50:34.859Z',
}, {
  id: 'ac27c619-2839-45f6-abfd-e6bcdd608509', jp: ' まいばん ひとり で 新聞 を 読みます ', en: ['Every night I read the newspaper by myself'], furi: [], notes: [], tags: ['other', 'kanji', 'verb'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-24T22:55:14.806Z', updatedAt: '2024-01-30T12:00:58.402Z',
}, {
  id: '0c30d473-d49c-46f7-8496-9750eff43ab1', jp: '私のあかいコートはどこですか', en: ['Where is my red coat?'], furi: [], notes: [], tags: ['thing', 'other', 'kanji', 'katakana'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:58:47.649Z', updatedAt: '2024-01-27T00:01:56.670Z',
}, {
  id: '8ba336aa-6d51-4df0-8229-95282566f82f', jp: '私 も ホラー ゲーム がすき です ', en: ['I also like horror video games'], furi: [], notes: [], tags: ['entertainment', 'verb'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-02-01T21:47:53.982Z', updatedAt: '2024-02-01T21:47:53.982Z',
}, {
  id: 'c2c8905c-6a0c-4219-a1b6-7e6280da3592', jp: 'はい、よくジャズをききます', en: ['Yes, I often listen to jazz.'], furi: [], notes: [], tags: ['other', 'entertainment'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:58:47.646Z', updatedAt: '2024-01-27T00:04:33.217Z',
}, {
  id: '9e146d2c-6937-4242-86a8-db2c73fada2f', jp: 'しゅみ は あります か ', en: ['Do you have any hobbies?'], furi: [], notes: [], tags: ['formality', 'verb'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-02-01T21:50:03.501Z', updatedAt: '2024-02-01T21:50:03.501Z',
}, {
  id: 'd5aedac7-2653-41de-becf-c73424274745', jp: ' あね の かわいい スカト がほしい です', en: ['I want my older sisters cute skirt'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-22T22:20:34.556Z', updatedAt: '2024-01-27T00:23:16.759Z',
}, {
  id: '9570cdc2-439b-42f9-9068-73a1ee86177f', jp: 'このくろいドレスはやすいですね', en: ['This black dress is cheap isnt it'], furi: [], notes: [], tags: ['clothes'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T22:17:05.682Z', updatedAt: '2024-01-24T16:50:52.483Z',
}, {
  id: '0c2695ea-d66d-4f6f-82e1-f221c35e7ccb', jp: '田中さん,みそしるはどうですか', en: ['Mr Tanaka, hows the miso soup?'], furi: [], notes: [], tags: ['food'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T22:50:38.667Z', updatedAt: '2024-01-24T16:50:56.502Z',
}, {
  id: 'f37d5e6b-8080-4f1c-8deb-28ce18d019e7', jp: 'ときどき しゅうまつ は ともだち と  あたらしい まんが を 買います ', en: ['I sometimes buy new manga on weekends with my friends'], furi: [], notes: [], tags: ['person', 'verb', 'entertainment'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-25T23:45:10.421Z', updatedAt: '2024-01-25T23:45:10.421Z',
}, {
  id: '530548ea-ef83-42a4-8794-bc565d92e4e9', jp: 'けんさん,カナダはどうですか', en: ['Ken, hows canada?'], furi: [], notes: [], tags: ['place'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T10:03:59.613Z', updatedAt: '2024-01-24T16:51:00.527Z',
}, {
  id: '5ca0979a-e8e8-4c5f-83ca-8a0f2441477e', jp: 'らいしゅう 私 の べんごし と コーヒー お 飲みます ', en: ['Im going to drink coffee next week with my lawyer'], furi: [], notes: [], tags: ['occupation', 'verb', 'food', 'time'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-31T11:38:23.072Z', updatedAt: '2024-01-31T11:38:23.072Z',
}, {
  id: '0661bfbe-b168-45bb-ab57-a85a2eb6a94a', jp: 'そのサラダはすこし大きいですね', en: ['That salad is a bit big isnt it'], furi: [], notes: [], tags: ['food'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-24T09:06:14.431Z', updatedAt: '2024-01-24T16:51:07.960Z',
}, {
  id: 'b8d61c4e-f1b3-4916-a298-6bdd0d9d657e', jp: '田中さんはそのちいさいまちにすんでいます', en: ['Mr Nakayama lives in that small town'], furi: [], notes: [], tags: ['place', 'person', 'verb', 'other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-22T11:07:33.342Z', updatedAt: '2024-01-24T16:51:13.553Z',
}, {
  id: '082c40e6-f616-41a7-bfed-0c6d38a6d2cf', jp: 'ときどき ともだち と でかけます か', en: ['Do you sometimes go out with friends'], furi: [], notes: [], tags: ['person', 'verb'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-24T22:38:32.321Z', updatedAt: '2024-02-01T10:50:59.773Z',
}, {
  id: '468032e5-d74f-4087-ba37-ce94fa407646', jp: 'ときどき かぞく と えいが を 見ます ', en: ['I sometimes watch movies with my family'], furi: [], notes: [], tags: ['entertainment', 'person'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-24T22:19:03.034Z', updatedAt: '2024-01-24T22:19:03.034Z',
}, {
  id: '3639e74e-8181-4bc1-a177-9684433983fb', jp: '日曜日 は 父 と じゅうどう を します ', en: ['On sundays I do judo with my dad'], furi: [], notes: [], tags: ['family', 'verb', 'sport'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-31T11:36:13.373Z', updatedAt: '2024-01-31T11:36:13.373Z',
}, {
  id: '59abf923-3706-4886-b98d-86b328570ffb', jp: 'まいばん 十一時 ごろ ねます ', en: ['I sleep around 11 o clock every night'], furi: [], notes: [], tags: ['time', 'verb'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-31T11:53:11.988Z', updatedAt: '2024-01-31T11:53:11.988Z',
}, {
  id: 'e13b9bbb-1ad8-40bf-aae9-d9a87635559d', jp: 'じゃあうどんていしょくをみっつください', en: ['Okay then, two udon meal sets please'], furi: [], notes: [], tags: ['food', 'formality'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-24T08:44:04.908Z', updatedAt: '2024-01-24T16:51:17.266Z',
}, {
  id: 'd3e75406-435d-4417-96de-da41f28d9efd', jp: 'はなさんはまいにち大きいべんとうをたべます', en: ['Hana eats a big boxed lunch every day'], furi: [], notes: [], tags: ['person', 'food', 'other', 'verb'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T23:28:34.356Z', updatedAt: '2024-01-24T16:51:21.256Z',
}, {
  id: '833fc98b-862d-4580-ae8c-56c7b7df453f', jp: 'はい, ニューヨークしゅっしんです', en: ['Yes im from New York'], furi: [], notes: [], tags: ['place'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T10:11:33.513Z', updatedAt: '2024-01-24T16:51:25.312Z',
}, {
  id: 'fa5e2435-a9d3-400d-bfcd-05dd0273b1ab', jp: 'おにぎりをよっつください', en: ['Four rice balls please'], furi: [], notes: [], tags: ['formality', 'food'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T22:26:13.966Z', updatedAt: '2024-01-24T16:51:29.244Z',
}, {
  id: 'dae15122-c8d0-4574-99b8-d7ba944e3046', jp: 'なおみさんはときどきアニメを見ます', en: ['Naomi sometimes watches anime'], furi: [], notes: [], tags: ['tech', 'entertainment', 'verb', 'other', 'kanji'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:58:47.658Z', updatedAt: '2024-01-24T16:51:33.198Z',
}, {
  id: '9e7d819f-315b-4576-9607-1f932d7efa15', jp: ' 何時 に おきます か', en: ['What time do you get up?'], furi: [], notes: [], tags: ['other', 'verb'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-30T11:20:38.159Z', updatedAt: '2024-01-30T11:20:38.159Z',
}, {
  id: 'a26388ba-17bb-4a73-932a-2bdcc77e9c03', jp: ' はい まいしゅう 父 と はしります ', en: ['Yes, I run every week with my dad'], furi: [], notes: [], tags: ['verb', 'other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-30T11:23:44.059Z', updatedAt: '2024-01-30T11:23:44.059Z',
}, {
  id: '847900d0-3a53-4ad7-9103-2024547266b7', jp: '私のふくはダサいです', en: ['My clothes are hideous'], furi: [], notes: [], tags: ['clothes'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T23:26:39.842Z', updatedAt: '2024-01-24T16:51:37.247Z',
}, {
  id: '4ad3eb5c-0934-4a22-97dc-4137d244e2af', jp: 'はんとうですか ? 私 の からて を します ! ', en: ['Really? I also do karate'], furi: [], notes: [], tags: ['verb', 'sport'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-02-01T21:43:20.355Z', updatedAt: '2024-02-01T21:43:20.355Z',
}, {
  id: 'c696e1c6-9cd7-44fd-a55e-af5cdf0cbb3e', jp: 'そのいしゃは十時半にコーヒーをのみます', en: ['That doctor drinks coffee at ten thirty'], furi: [], notes: [], tags: ['person', 'occupation', 'time'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T09:58:12.964Z', updatedAt: '2024-01-24T16:51:41.045Z',
}, {
  id: '311abb31-249f-4e68-a5d8-3e678c0cd23d', jp: '水をください', en: ['Water please'], furi: [], notes: [], tags: ['formality'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T15:54:21.968Z', updatedAt: '2024-01-24T16:51:44.900Z',
}, {
  id: '56e83299-0831-4366-a892-940d3724b5ff', jp: 'このまちもにぎやかです', en: ['This town is also lively'], furi: [], notes: [], tags: ['place', 'other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-22T11:08:53.858Z', updatedAt: '2024-01-24T16:51:49.288Z',
}, {
  id: 'b5b23c93-1013-495b-be43-b49e10a93516', jp: 'あのやすいみせはいいですね', en: ['That cheap store over there is nice isnt it'], furi: [], notes: [], tags: ['adjective', 'place'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T09:42:35.017Z', updatedAt: '2024-01-24T16:51:53.338Z',
}, {
  id: 'e217952f-ba2f-40f8-adff-d5ed00162fb1', jp: '私 の いもうと も かんこく に すんでいます ', en: ['My younger sister also lives in korea'], furi: [], notes: [], tags: ['country', 'family', 'kanji'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-02-03T13:35:18.093Z', updatedAt: '2024-02-03T13:35:18.093Z',
}, {
  id: 'd280e63c-ca11-42ec-aa47-404d668d2a54', jp: '私のスカトはかっこいいですか', en: ['Is my skirt cool?'], furi: [], notes: [], tags: ['other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-22T22:17:52.912Z', updatedAt: '2024-01-24T16:51:57.406Z',
}, {
  id: 'f04ed7d5-42c8-4ec8-b825-f2382e318aef', jp: 'このかわいいtシャツは四百えんです', en: ['This cute tshirt is four hundred yen'], furi: [], notes: [], tags: ['clothes'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T22:07:40.691Z', updatedAt: '2024-01-24T16:52:01.126Z',
}, {
  id: '83cae78a-f5fe-44ae-b854-38ea1359cc22', jp: 'しゅうまつ は いもうと と スポーツ を  します ', en: ['I play sports on the weekends with my younger sister'], furi: [], notes: [], tags: ['sport', 'person'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-24T22:26:26.190Z', updatedAt: '2024-01-24T22:26:26.190Z',
}, {
  id: '2003a541-ca80-442c-b9bb-545c40fffdd4', jp: 'しゅうまつ は よく ともだち と ファンタシー ゲーム を します ', en: ['I often play fantasy video games with friends on weekends'], furi: [], notes: [], tags: ['verb', 'entertainment', 'person'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-02-01T21:45:29.800Z', updatedAt: '2024-02-01T21:45:29.800Z',
}, {
  id: 'cb77021e-6104-4ee6-a43a-54a645f53a13', jp: 'このあおいネクタイがほしいです', en: ['I want this blue necktie'], furi: [], notes: [], tags: ['clothes'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T22:13:37.534Z', updatedAt: '2024-01-24T16:52:10.903Z',
}, {
  id: '13c04e00-0032-4df8-88f6-3ec22def42a6', jp: 'しゅうまつ は ひとり で ゲーム を します ', en: ['I play video games by myself on weekends'], furi: [], notes: [], tags: ['entertainment', 'person'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-25T22:10:04.356Z', updatedAt: '2024-01-25T22:10:04.356Z',
}, {
  id: '1a60e30d-2270-4935-b9e8-14f82fc41a61', jp: 'このアイスクリームはとても大きいですね', en: ['This ice cream is very big isnt it'], furi: [], notes: [], tags: ['adjective', 'food'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-24T09:00:42.404Z', updatedAt: '2024-01-24T16:52:15.287Z',
}, {
  id: '02929410-7142-4e44-8751-43f19c16f301', jp: 'おもしろいえいがを見ますか', en: ['Do you watch funy movies?'], furi: [], notes: [], tags: ['entertainment', 'other', 'verb', 'kanji'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:58:47.643Z', updatedAt: '2024-01-24T16:52:19.507Z',
}, {
  id: 'e2861e50-b7b0-4864-80ec-64178a4ea057', jp: ' いつも 八時 半 に あさごはん を 食べます か', en: ['Do you always eat breakfast at eight thirty?'], furi: [], notes: [], tags: ['verb', 'time'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-30T11:58:19.853Z', updatedAt: '2024-01-30T11:58:19.853Z',
}, {
  id: 'd15a867c-3fe0-4ef8-8bee-ef94703e52d8', jp: 'はなさんのあおいスカートはちょっと', en: ['I dont really like Hanas blue skirt'], furi: [], notes: [], tags: ['clothes'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T09:54:21.327Z', updatedAt: '2024-01-26T23:58:59.986Z',
}, {
  id: 'ff61c627-3d69-4a77-9db9-f0b16417c7f3', jp: 'なおみさんのかぞくもちいさいです', en: ['Naomis family is also small'], furi: [], notes: [], tags: ['family', 'adjective', 'person'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T10:02:45.148Z', updatedAt: '2024-01-24T16:52:27.391Z',
}, {
  id: 'e805af40-7411-48d3-87bf-669e720d80d5', jp: 'まいにちおいしいあさごはんをたべます', en: ['I eat a tasty breakfast every day'], furi: [], notes: [], tags: ['adjective', 'food'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T10:00:00.008Z', updatedAt: '2024-01-24T16:52:31.929Z',
}, {
  id: 'bfae16ab-6f5e-41a1-b47d-91ed095e170c', jp: 'このかっこいいジャケットは六千えんです', en: ['This cool jacket is six thousand yen'], furi: [], notes: [], tags: ['clothes'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T22:01:52.757Z', updatedAt: '2024-01-24T16:52:35.992Z',
}, {
  id: '03a3ca8e-5c76-4f9a-8332-1d74d6a9223a', jp: 'まいにち ともだち と あそびます か ', en: ['Do you hang out with friends every day'], furi: [], notes: [], tags: ['verb', 'person'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-31T11:34:51.016Z', updatedAt: '2024-01-31T11:34:51.016Z',
}, {
  id: 'af4322cc-879d-46ba-993a-956513d7e695', jp: 'けんさんはまいにちあさごはんおたべますか', en: ['Does Ken eat breakfast every day?'], furi: [], notes: [], tags: ['food', 'person'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T10:01:25.659Z', updatedAt: '2024-01-24T16:52:39.952Z',
}, {
  id: '3675f9e8-0cdd-4095-acd3-0fc5cb13c374', jp: 'これはバスケットボールじゃないです', en: ["This isn't basketball."], furi: [], notes: [], tags: ['sport', 'other', 'katakana'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-21T15:58:47.655Z', updatedAt: '2024-01-27T00:01:41.120Z',
}, {
  id: 'c1a80fcf-9699-4d7b-a167-72af1ceb1956', jp: '私のふくはおしゃれじゃないです', en: ['My clothes arent stylish'], furi: [], notes: [], tags: ['clothes', 'adjective'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T09:38:40.410Z', updatedAt: '2024-01-24T16:52:47.428Z',
}, {
  id: '5575d66f-9691-45f5-84b3-7aa4b9f6be15', jp: 'このあかいかばんはとても古いですね', en: ['This red bag is very old isnt it'], furi: [], notes: [], tags: ['thing'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T23:29:11.183Z', updatedAt: '2024-01-24T16:52:51.151Z',
}, {
  id: '91b9f9a2-7d4a-484e-a678-b627ba9a781a', jp: 'まいばんひとりでばんごはんをたべます', en: ['I eat dinner by myself every night'], furi: [], notes: [], tags: ['verb', 'food'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-24T12:44:29.238Z', updatedAt: '2024-02-01T10:51:27.769Z',
}, {
  id: '3a119040-fe46-423f-ba05-b5d403c79d44', jp: 'すみません、しゅっしんはどこですか', en: ['Excuse me, where are you from?'], furi: [], notes: [], tags: ['person', 'formality', 'other'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-22T11:09:39.358Z', updatedAt: '2024-01-24T16:52:55.050Z',
}, {
  id: '6612f99f-63be-46e5-a5c1-6dd1b7fb759b', jp: 'トロントしゅっしんですか', en: ['Are you from Toronto?'], furi: [], notes: [], tags: ['place', 'country'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T10:04:55.437Z', updatedAt: '2024-01-27T00:05:19.125Z',
}, {
  id: 'e2d49bd8-e96a-45a9-ae75-ac5f671cf283', jp: 'これは二百えんです', en: ['That is two hundred yen'], furi: [], notes: [], tags: ['thing'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T09:49:01.079Z', updatedAt: '2024-01-24T16:53:05.197Z',
}, {
  id: '2bfc18a3-7e05-457d-a0be-67e5ad716960', jp: 'このかさはすてきですね', en: ['This umbrella is lovely isnt it'], furi: [], notes: [], tags: ['adjective', 'thing'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T22:22:10.449Z', updatedAt: '2024-02-01T10:51:36.796Z',
}, {
  id: '85524f61-9e55-4757-9b30-585979122719', jp: 'ええと, 水をください', en: ['Uhm water please'], furi: [], notes: [], tags: ['food', 'formality'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T22:31:17.847Z', updatedAt: '2024-02-01T10:51:55.546Z',
}, {
  id: '96f154b5-3a5b-4479-a15d-9deae80feb62', jp: 'すみません, コーヒーをみっつください', en: ['Excuse me, three coffees please'], furi: [], notes: [], tags: ['food'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T22:38:26.538Z', updatedAt: '2024-01-27T00:00:16.924Z',
}, {
  id: '80d33bc1-50b6-4fd7-a741-40981979884e', jp: 'じゃあ, おちゃをみっつください', en: ['Okay then three green teas please'], furi: [], notes: [], tags: ['food', 'formality'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T22:35:09.987Z', updatedAt: '2024-01-24T16:53:19.393Z',
}, {
  id: '414ef1b4-90e5-4834-baaf-f49efcaf66b2', jp: 'いもうともうるさいです', en: ['My younger sister is also noisy'], furi: [], notes: [], tags: ['family', 'adjective'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-23T10:08:11.028Z', updatedAt: '2024-01-24T16:46:52.717Z',
}, {
  id: '42ca8bf7-6dad-40b2-989a-43480980044a', jp: 'あした 何時 に なおみ さん と でかけます か ', en: ['What time are you going out with naomi tomorrow'], furi: [], notes: [], tags: ['person', 'verb'], hits: 1, misses: 1, difficulty: 1, createdAt: '2024-01-31T11:40:51.148Z', updatedAt: '2024-01-31T11:40:51.148Z',
}];
export default SENTENCES_MOCK;
