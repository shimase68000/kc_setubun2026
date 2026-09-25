/*
  File: ivdata.js
  Author: UG.
  Created: 2026-09-25
  Last Updated: 2026-09-25
  Description: 
    イベントの開催期間やアイテム定義を格納するデータファイル。
    HTML本体から <script src="ivdata.js"> により読み込まれる。

  License: MIT License
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/

        const STATUS_FIN = "終了日確定"; // "終了日不明";
        const STATUS_REW = "報酬有り";   // "報酬不明";

        const ivent_name  = "艦これ 2026節分イベント 豆計算";
        const ivent_name2 = "節分イベント";

        const baseDate   = new Date("2026-01-28T05:00:00+09:00");  // イベント開始日時
        const finishDate = new Date("2026-02-13T11:00:00+09:00");  // イベント終了日時（確定）

        const key_myitem = "kcolle_setubun2026_mame";


        // 日間任務
        const d_quest = [
            // 任務名称, アイテム個数
            "[演習]【節分任務:枡】節分演習！二〇二六", 1
        ];

        // 週間任務
        const w_quest = [
            "[出撃]【節分任務:豆】節分作戦二〇二六", 2,
            "[出撃]【節分任務:鬼】南西方面節分作戦二〇二六", 3,
            "[出撃]【節分任務:柊】節分拡張作戦二〇二六、重巡出撃！", 4
        ];

        // 月間任務
        const m_quest = [
        ];

        // 単発任務
        const s_quest = [
            "[遠征]【節分任務:恵方】令和八年節分遠征", 4,
            "[出撃]【節分任務:最終拡張作戦】節分二〇二六 戦果拡大！", 5
        ];

        // イベント報酬
        const item = [
            // 報酬名称, 必要アイテム数, 報酬上限
            "恵方震電（試製 震電(局地戦闘機)★2）[要]開発資材x48", 34, 1,
            "航空設計桝（新型航空機設計図）", 12, 99,
            "対潜兵装柊（九三式水中聴音機x5 or 三式水中探信儀x3 or 三式爆雷投射機x2）", 5, 99,
            "明石爆雷豆（改修資材 or 九五式爆雷）", 2, 99
        ];

        const STR_FOOTER = `Copyright &copy; 2026 UG.<br>This software is released under the MIT License.`;
