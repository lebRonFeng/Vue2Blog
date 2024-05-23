<template>
    <nav class="menu-container">
        <RouterLink 
            :exact="item.exact" 
            v-for="item in items" 
            :key="item.link"
            active-class="selected" 
            exact-active-class=""
            :to="item.link">
            <div class="icon">
                <Icon :type="item.icon" />
            </div>
            <span>{{ item.title }}</span>
        </RouterLink>
        <!-- 命名路由
        <RouterLink :to="{name: item.name}"></RouterLink> -->
    </nav>
</template>

<script>
import Icon from "@/components/Icon"
export default {
    components: {
        Icon
    },
    data() {
        return {
            items: [
                {
                    link: "/",
                    title: "首页",
                    icon: "home",
                    exact: true
                },
                {
                    link: "/blog",
                    title: "文章",
                    icon: "blog",
                    exact: false
                },
                {
                    link: "/about",
                    title: "关于我",
                    icon: "about",
                    exact: true
                },
                {
                    link: "/project",
                    title: "项目&效果",
                    icon: "code",
                    exact: true
                },
                {
                    link: "/message",
                    title: "留言板",
                    icon: "chat",
                    exact: true
                },
            ]
        }
    }
}
</script>

<style scoped lang="less">
.menu-container {
    color: gray;
    margin: 24px 0;

    a {
        &.selected {
            background: #2d2d2d;
        }

        padding:0 50px;
        display: block;
        display: flex;
        align-items: center;
        height: 45px;
        color: gray;
        text-decoration: none;

        .icon {
            width: 24px;
            color: gray;
        }

        &:hover {
            color: #fff;
        }
    }
}
</style>