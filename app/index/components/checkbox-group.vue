<template>
  <div>
    <label>
      <input type="checkbox" @change="handleChange" :checked="isChecked" :id="id">
      <span class="checkbox"></span>
      <span class="text" s-if="text">{{text}}</span>
    </label>
    <div class="sub">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: ["text", "id"],

  mounted() {
    if (this.$parent.onDispatch) {
      this.$on("checkStatus", this.$parent.onDispatch);
    }
  },
  data() {
    return {
      id: this.id,
      parent: null,
      subItems: [],
      isChecked: false
    };
  },
  methods: {
    _setIndeterminate(bool) {
      document.getElementById(this.id).indeterminate = bool;
    },
    _getIndeterminate() {
      return document.getElementById(this.id).indeterminate;
    },
    _setAllSubItem(component, bool) {
      component.$children.map(i => {
        i.isChecked = bool;
        this._setAllSubItem(i, bool);
      });
    },
    onDispatch(val) {
      // // 恢复默认状态
      //不是根元素
      // console.log(this.$parent.$parent._uid);
      console.log(this);
      this._setIndeterminate(false);

      // // 如果传过来的值是"indeterminate"
      if (val == "indeterminate") {
        this._setIndeterminate(true);
        this.$emit("checkStatus", "indeterminate");
        return;
      }
      var subItems = this.$children;
      if (subItems.length > 0) {
        var check_num = 0;
        subItems.map(i => {
          // 或者如果子选项中有一个为indeterminate
          if (i._getIndeterminate()) {
            this._setIndeterminate(true);
            this.$emit("checkStatus", "indeterminate");
            return;
          }

          if (i.isChecked) {
            check_num++;
          }
        });
        if (check_num == subItems.length) {
          //选中子项目个数
          this.isChecked = true;
          this.$emit("checkStatus", true);
        } else if (check_num == 0) {
          this.isChecked = false;
          this.$emit("checkStatus", false);
        } else {
          this._setIndeterminate(true);
          this.$emit("checkStatus", "indeterminate");
        }
      }
    },
    handleChange() {
      this.isChecked = !this.isChecked;
      this.$emit("checkStatus", this.isChecked);
      if (this.isChecked) {
        this._setAllSubItem(this, true);
      } else {
        this._setAllSubItem(this, false);
      }
    }
  }
};
</script>
<style lang="stylus">
label {
  display: inline-block;
}

input[type='checkbox'] {
  display: none;
  margin: 0;
}

input[type='checkbox'] + span {
  display: inline-block;
  height: 35px;
  vertical-align: middle;
}

input[type='checkbox'] + span.checkbox {
  background: url('../svg/unchecked.svg');
  background-size: contain;
  opacity: 0.5;
  width: 35px;
}

input[type='checkbox']:checked + span.checkbox {
  background: url('../svg/checked.svg');
}

input[type='checkbox']:indeterminate + span.checkbox {
  background: url('../svg/indeterminate.svg');
}

input[type='checkbox']:disabled + span.checkbox {
  opacity: 0.2;
}

.sub {
  margin-left: 35px;
}

.text {
  margin-left: 4px;
  color: #505050;
}
</style>