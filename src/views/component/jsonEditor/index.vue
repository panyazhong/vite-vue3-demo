<template>
  <div>
    <textarea
      ref="mycode"
      class="codesql"
      v-model="code"
      style="height: 200px; width: 600px"
    ></textarea>
  </div>
</template>

<script>
import CodeMirror from 'codemirror/lib/codemirror';

import 'codemirror/theme/ambiance.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/rubyblue.css';
import 'codemirror/addon/hint/show-hint.css';

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
        mode: 'javascript/text',
        indentWithTabs: true,
        theme: 'rubyblue',
        smartIndent: true,
        lineNumbers: true,
        matchBrackets: true,
        //theme: theme,
        // autofocus: true,
        extraKeys: { Ctrl: 'autocomplete' }, //自定义快捷键
        hintOptions: {
          //自定义提示选项
          tables: {
            users: ['name', 'score', 'birthDate'],
            countries: ['name', 'population', 'size'],
          },
        },
      });

      editor.setValue('const a = 1');
    },
  },
};
</script>

<style></style>
