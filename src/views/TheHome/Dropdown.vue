<script setup lang="js">
import Card from '@/components/Card.vue';
</script>

<template>
  <Card title="Dropdown" class="card-wrapper">
    <div>
      <bq-dropdown open placement="bottom">
        <bq-button slot="trigger"> Dropdown </bq-button>
        <bq-option-list aria-label="Options" role="listbox">
          <bq-option value="users">
            <span>Users</span>
          </bq-option>
          <bq-option value="user">
            <span>My profile</span>
          </bq-option>
          <bq-option value="dashboard">
            <span>Dashboard</span>
          </bq-option>
          <bq-option value="settings">
            <span>Settings</span>
          </bq-option>
          <bq-option value="logout">
            <span>Logout</span>
          </bq-option>
        </bq-option-list>
      </bq-dropdown>
    </div>
    <div>
      <bq-dropdown open placement="bottom">
        <bq-button appearance="secondary" slot="trigger">
          <span>
            <bq-icon name="dots-three-vertical"></bq-icon>
          </span>
        </bq-button>
        <bq-option-list aria-label="Options" role="listbox">
          <bq-option value="users">
            <span>Users</span>
          </bq-option>
          <bq-option value="user">
            <span>My profile</span>
          </bq-option>
          <bq-option value="dashboard">
            <span>Dashboard</span>
          </bq-option>
          <bq-option value="settings">
            <span>Settings</span>
          </bq-option>
          <bq-option value="logout">
            <span>Logout</span>
          </bq-option>
        </bq-option-list>
      </bq-dropdown>
    </div>
    <div>
      <bq-dropdown open placement="bottom">
        <bq-avatar
          alt-text="User profile"
          image="https://images.unsplash.com/photo-1524593689594-aae2f26b75ab?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
          label="Avatar component label"
          slot="trigger"
        ></bq-avatar>
        <bq-option-list aria-label="Options" role="listbox">
          <bq-option value="users">
            <span>Users</span>
          </bq-option>
          <bq-option value="user">
            <span>My profile</span>
          </bq-option>
          <bq-option value="dashboard">
            <span>Dashboard</span>
          </bq-option>
          <bq-option value="settings">
            <span>Settings</span>
          </bq-option>
          <bq-option value="logout">
            <span>Logout</span>
          </bq-option>
        </bq-option-list>
      </bq-dropdown>
    </div>
  </Card>
</template>

<style lang="css" scoped>
.card-wrapper :deep(.card__content) {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;

  @apply md:grid-cols-3;
}

.card-wrapper :deep(.card__content) div {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80px;

  @apply md:min-h-[300px];
}
</style>
