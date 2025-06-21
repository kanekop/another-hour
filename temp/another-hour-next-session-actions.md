# Another Hour プロジェクト - 次セッション アクションアイテム

**作成日**: 2025年6月21日
**セッション**: packages/core 改修とtime-design-core統合戦略セッション
**進捗**: Time Design Modes統合完了、packages/core依存関係修正完了

---

## 🎯 優先度順アクションアイテム

### 🔴 **Priority 1: packages/core テスト環境修復** (推定: 1-2日)

#### 現状の問題
- Jestテスト実行がタイムアウト（15-30秒）
- ESMとts-jestの設定競合
- TypeScriptモジュール解決エラー

#### 具体的修正内容
```bash
# 1. Jest設定の根本的見直し
cd packages/core
# 現在のjest.config.jsをESM対応で完全書き直し

# 2. TypeScript設定の最適化
# tsconfig.jsonのmoduleResolution設定確認

# 3. テストファイルの修正完了
# - WakeBasedMode.test.ts (getterメソッド追加済み)
# - TimeDesignManager.test.ts (configオブジェクト修正済み)
# - validation.test.ts (型定義修正済み)
```

#### 成功基準
- [ ] 全テストファイルが15秒以内で実行完了
- [ ] テストカバレッジが30%以上で表示
- [ ] TypeScriptコンパイルエラーゼロ

### 🟡 **Priority 2: time-design-core統合戦略実行** (推定: 3-5日)

#### Phase 1: 重複パッケージ削除
```bash
# 1. scheduler-web依存関係削除
cd packages/scheduler-web
npm uninstall @another-hour/time-design-core

# 2. package.json編集
# - "@another-hour/time-design-core"行を削除

# 3. 重複パッケージディレクトリ削除
rm -rf packages/@another-hour/time-design-core

# 4. 動作確認
npm run dev  # scheduler-web正常動作確認
```

#### Phase 2: packages/core最適化
```bash
# 1. console.log削除
# src/TimeDesignManager.ts - 6箇所のconsole.log削除

# 2. READMEとAPI文書更新
# packages/core/README.md - 実装とドキュメントの整合性確認

# 3. テストカバレッジ向上
# 目標: 32% → 60%以上
```

#### 成功基準
- [ ] 重複コード1,797行完全削除
- [ ] packages/coreのみでTime Design Modes提供
- [ ] 全アプリケーション正常動作
- [ ] バンドルサイズの最適化確認

### 🟢 **Priority 3: 品質向上とドキュメント整備** (推定: 1週間)

#### コード品質改善
```bash
# 1. TypeScript strict mode有効化
# tsconfig.json設定強化

# 2. ESLint導入
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin

# 3. エラーハンドリング強化
# BaseMode.tsのエラーハンドリング改善
```

#### ドキュメント整備
```bash
# 1. API文書生成
# TypeDocまたはJSDocでAPI文書自動生成

# 2. 使用方法ガイド更新
# packages/core/README.md完全更新

# 3. CLAUDE.md更新
# 統合完了状況を反映
```

---

## 📁 重要ファイル一覧

### 修正対象ファイル
```
packages/core/
├── jest.config.js          # 🔴 Jest設定の根本見直し
├── src/TimeDesignManager.ts # 🟡 console.log削除
├── src/validation.ts       # 🔴 テスト用関数export確認
├── tests/validation.test.ts # 🔴 型定義修正完了
├── tests/TimeDesignManager.test.ts # 🔴 configオブジェクト修正完了
└── tests/WakeBasedMode.test.ts # 🔴 getterメソッド対応完了
```

### 削除対象
```
packages/@another-hour/time-design-core/  # 🟡 完全削除予定
packages/scheduler-web/package.json      # 🟡 依存関係削除
```

### 更新対象
```
CLAUDE.md                    # 🟢 統合完了状況反映
packages/core/README.md      # 🟢 API文書更新
```

---

## 🚀 次セッション開始時のチェックリスト

### 環境確認
- [ ] 開発サーバー正常起動確認 (`npm run dev`)
- [ ] packages/coreビルド確認 (`npm run build --workspace=@another-hour/core`)
- [ ] time-design-coreパッケージ存在確認

### 作業開始前の状況把握
```bash
# 1. 現在のテスト状況確認
npm run test --workspace=@another-hour/core

# 2. 依存関係確認
cat packages/scheduler-web/package.json | grep time-design-core

# 3. 重複ファイル確認
ls -la packages/@another-hour/
```

### 推奨作業順序
1. **Jest設定修正** → テスト環境復旧
2. **重複パッケージ削除** → アーキテクチャ統合
3. **品質向上** → 長期保守性確立

---

## 📊 進捗状況

### ✅ 完了済み項目
- Time Design Modes アーキテクチャ統合完了
- packages/core依存関係修正完了
- TypeScriptビルド環境修復完了
- テストファイル構造修正完了
- WakeBasedMode.tsのgetterメソッド追加
- TimeDesignManager.testの型定義修正

### 🔄 進行中項目  
- Jest実行環境の最適化
- ESMモジュール解決の改善

### ⏳ 未着手項目
- time-design-coreパッケージ削除
- console.log文の削除
- ドキュメント更新
- テストカバレッジ向上

---

## 💡 技術的メモ

### Jest設定のキーポイント
```javascript
// 推奨設定方向性
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  },
  transform: {
    '^.+\\.ts$': 'ts-jest'
  }
};
```

### 統合戦略の核心
- **packages/core**: TypeScript + テスト → 主要パッケージ化
- **time-design-core**: JavaScript → 段階的廃止
- **利益**: 1,797行削除 + 74KB(moment.js)削除 + 保守性向上

---

## 📞 次セッション開始時の確認事項

「前回は packages/core のテスト修正と time-design-core パッケージ統合戦略を検討しました。Jest設定の問題でテスト実行がタイムアウトしている状況で、packages/core を主要パッケージとして time-design-core を段階的に廃止する方針を決定しました。Jest設定の根本修正から開始しますか？」

**最重要**: packages/core のテスト環境修復が全体の成功の鍵となります。

---

**作成者**: Claude Code  
**次回セッション推奨開始**: Jest設定修正から