const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

/*
 * This is a custom ESLint configuration for use with
 * internal (bundled by their consumer) libraries
 * that utilize React.
 */
/** @type {import("eslint").Linter.Config} */
module.exports = {
  // 실행 환경 설정
  env: {
    browser: true, // 브라우저 환경 활성화
    es2023: true, // 최신 ECMAScript 기능 활성화
    node: true, // Node.js 전역 변수 및 Node.js 스코프 활성화
  },

  // 파서 설정
  parser: '@typescript-eslint/parser', // TypeScript 코드 파싱을 위한 파서
  parserOptions: {
    ecmaVersion: 'latest', // 최신 ECMAScript 버전 사용
    sourceType: 'module', // ECMAScript 모듈 사용
    project, // TypeScript 프로젝트 설정 파일 경로
  },

  // 사용할 플러그인 목록
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y',
    '@typescript-eslint',
    'import',
    'simple-import-sort',
    'prettier',
  ],

  // 확장할 설정 목록
  extends: [
    'eslint:recommended', // ESLint 추천 규칙
    'plugin:@typescript-eslint/recommended', // TypeScript 추천 규칙
    'plugin:react/recommended', // React 추천 규칙
    'plugin:react-hooks/recommended', // React Hooks 추천 규칙
    'plugin:jsx-a11y/recommended', // 접근성 추천 규칙
    'plugin:import/errors', // import 관련 오류 규칙
    'plugin:import/warnings', // import 관련 경고 규칙
    'plugin:import/typescript', // TypeScript의 import 규칙
    'prettier', // Prettier와 충돌하는 ESLint 규칙 비활성화
  ],

  // 설정
  settings: {
    react: {
      version: 'detect', // 설치된 React 버전 자동 감지
    },
    'import/resolver': {
      typescript: {
        project, // TypeScript 프로젝트 설정 사용
      },
    },
  },

  // 전역 변수 설정
  globals: {
    React: 'readonly',
    JSX: 'readonly',
  },

  // ESLint 가 무시할 파일 및 디렉토리
  ignorePatterns: [
    '.*.js',
    'node_modules/',
    'dist/',
    'build/',
    '*.config.js',
    '*.config.ts',
  ],

  // ESLint 규칙
  rules: {
    // Prettier
    'prettier/prettier': 'error', // Prettier 규칙 위반을 오류로 처리

    // React
    'react/react-in-jsx-scope': 'off', // React 17 이후 버전에서는 import React 불필요
    'react/prop-types': 'off', // TypeScript를 사용하므로 prop-types 불필요
    'react/jsx-props-no-spreading': 'off', // props spreading 허용
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ], // 함수 컴포넌트 정의 스타일 통일

    // TypeScript
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 명시적 반환 타입 강제하지 않음
    '@typescript-eslint/no-explicit-any': 'warn', // any 타입 사용 시 경고
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports' },
    ], // 타입 import 일관성 유지

    // Imports
    'import/prefer-default-export': 'off', // default export 강제하지 않음
    'simple-import-sort/imports': 'error', // import 문 정렬 강제
    'simple-import-sort/exports': 'error', // export 문 정렬 강제
    'import/first': 'error', // import 문을 파일 최상단에 위치
    'import/newline-after-import': 'error', // import 문 다음에 빈 줄 강제
    'import/no-duplicates': 'error', // 중복 import 금지

    // 기타
    'no-console': ['warn', { allow: ['warn', 'error'] }], // console.log() 사용 시 경고
  },

  // 특정 파일에 대한 개별 규칙 설정
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        // TypeScript 파일에 대한 특별 규칙
      },
    },
    {
      files: ['**/*.js', '**/*.jsx'],
      rules: {
        // JavaScript 파일에 대한 특별 규칙
      },
    },
  ],
}
