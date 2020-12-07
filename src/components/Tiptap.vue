<template>
  <div class="editor">
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      <div class="menubar">
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bold() }"
          @click.prevent.stop="commands.bold"
        >
          <i class="fas fa-bold"></i>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.italic() }"
          @click.prevent.stop="commands.italic"
        >
          <i class="fas fa-italic"></i>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.strike() }"
          @click.prevent.stop="commands.strike"
        >
          <i class="fas fa-strikethrough"></i>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.underline() }"
          @click.prevent.stop="commands.underline"
        >
          <i class="fas fa-underline"></i>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
          @click.prevent.stop="commands.heading({ level: 1 })"
        >
          h1
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 2 }) }"
          @click.prevent.stop="commands.heading({ level: 2 })"
        >
          h2
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 3 }) }"
          @click.prevent.stop="commands.heading({ level: 3 })"
        >
          h3
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bullet_list() }"
          @click.prevent.stop="commands.bullet_list"
        >
          <i class="fas fa-list-ul"></i>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.ordered_list() }"
          @click.prevent.stop="commands.ordered_list"
        >
          <i class="fas fa-list-ol"></i>
        </button>
      </div>
    </editor-menu-bar>

    <editor-content
      class="editor__content"
      :editor="editor"
      v-model="content"
    />
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap';
import {
  BulletList,
  HardBreak,
  Heading,
  ListItem,
  OrderedList,
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
  props: ['content'],
  data() {
    return {
      editor: new Editor({
        extensions: [
          new BulletList(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new ListItem(),
          new OrderedList(),
          new Link(),
          new Bold(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History(),
        ],
        content: '',

        onUpdate: ({ getHTML }) => {
          this.$emit('input', getHTML());
        },
      }),
    };
  },
  created() {
    this.editor.setContent(this.content);
  },
  beforeDestroy() {
    this.editor.destroy();
  },
};
</script>

<style lang="scss" scoped>
// .write-space {
//   display: flex;
//   flex-flow: column nowrap;
//   justify-content: stretch;
//   background-color: white;
//   border-bottom-left-radius: 5px;
//   border-bottom-right-radius: 5px;
// }

.editor__content {
  line-height: 21px;
  background-color: white;
  height: 100%;
  border-radius: 2px;
}

.menubar {
  margin-bottom: 1rem;
  transition: visibility 0.2s 0.4s, opacity 0.2s 0.4s;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;

  &__button {
    font-weight: bold;
    width: 40px;
    background: white;
    border: 0;
    color: darkblue;
    padding: 2px;
    margin-right: 3px;
    margin-bottom: 3px;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      background-color: lightgrey;
    }

    &.is-active {
      background-color: lightgrey;
    }
  }
}
</style>
