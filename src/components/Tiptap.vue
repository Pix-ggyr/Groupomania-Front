<template>
  <div class="write-space">
    <editor-menu-bar
      :editor="editor"
      v-slot="{ commands, isActive }"
      class="editor-menu-bar"
    >
      <div>
        <button
          :class="{ 'is-active': isActive.bold() }"
          @click="commands.bold"
        >
          B
        </button>
        <button
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic"
        >
          I</button
        ><button
          :class="{ 'is-active': isActive.underline() }"
          @click="commands.underline"
        >
          U
        </button>
        <button
          :class="{ 'is-active': isActive.blockquote() }"
          @click="commands.blockquote"
        >
          " "
        </button>
        <button
          :class="{ 'is-active': isActive.strike() }"
          @click="commands.strike"
        >
          $
        </button>
        <button
          :class="{ 'is-active': isActive.link() }"
          @click="commands.link"
        >
          url
        </button>
      </div>
    </editor-menu-bar>
    <editor-content :editor="editor" class="editor-content" />
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap';
import {
  Blockquote,
  ListItem,
  OrderedList,
  BulletList,
  Bold,
  Italic,
  Link,
  Strike,
  Underline,
  History,
} from 'tiptap-extensions';

export default {
  name: 'Tiptap',
  components: {
    EditorMenuBar,
    EditorContent,
  },
  data() {
    return {
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new ListItem(),
          new BulletList(),
          new OrderedList(),
          new Bold(),
          new Italic(),
          new Link(),
          new Strike(),
          new Underline(),
          new History(),
        ],
        content: '',
      }),
    };
  },
  beforeDestroy() {
    this.editor.destroy();
  },
};
</script>

<style lang="scss" scoped>
.write-space {
  display: flex;
  flex-flow: column nowrap;
  justify-content: stretch;
  background-color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.editor-menu-bar {
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  width: 100%;
}

.editor-menu-bar > button {
  color: black;
  background-color: white;
  border-radius: 0;
  width: 100%;
  box-shadow: 0 0 0;
  border: solid 2px cornflowerblue;
}

.editor-content {
  height: 150px;
}
</style>
