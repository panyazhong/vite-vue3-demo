<template>
  <div class="json-editor">
    <textarea ref="mycode" class="codesql"></textarea>
  </div>
</template>

<script>
import CodeMirror from 'codemirror/lib/codemirror';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/rubyblue.css';
import 'codemirror/theme/darcula.css';
import 'codemirror/addon/hint/show-hint.css';

import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/lint/lint';
import 'codemirror/addon/lint/json-lint';
import 'codemirror/addon/lint/lint.css';

// import jsonlint from 'jsonlint'; //引入
// window.jsonlint = jsonlint; //全局化
// TODO vite 无法引入jsonlint
export default {
  data() {
    return {
      code: '',
    };
  },
  mounted() {
    this.initEditor();
  },
  methods: {
    initEditor() {
      const editor = CodeMirror.fromTextArea(this.$refs.mycode, {
        lineNumbers: true,
        mode: 'application/json',
        gutters: ['CodeMirror-lint-markers'],
        theme: 'darcula',
        // lint: true,
      });

      let json = {
        info: {
          title: 'json-editior-title',
          author: 'user',
          version: '1.0',
          date: '2021-02-18 14:21:18',
          description: 'codemirror mode json theme darcula',
        },
        desc: [],
      };
      editor.setValue(JSON.stringify(json, null, 2));
    },
  },
};
</script>

<style scoped>
.json-editor {
  height: 100%;
  position: relative;
  font-weight: bold;
  font-family: Microsoft YaHei, Helvetica Neue, Arial, Hiragino Sans GB,
    WenQuanYi Micro Hei, sans-serif;
}

.json-editor :deep() .CodeMirror {
  height: 100%;
  min-height: 100px;
}

.json-editor :deep() .CodeMirror-scroll {
  min-height: 100px;
}

.json-editor :deep() .cm-s-darcula span.cm-string {
  color: #0ad161;
  font-size: 14px;
}
.json-editor :deep() .cm-s-darcula span.cm-property {
  color: #4fdee5;
  font-size: 14px;
}
</style>
