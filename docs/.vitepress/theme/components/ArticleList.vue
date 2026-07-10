<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { pages } = useData()

const posts = computed(() => {
  if (!pages.value) return []
  return pages.value
    .filter(
      (page) => page.path.startsWith('/posts/') && page.path !== '/posts/'
    )
    .sort((a, b) => {
      const dateA = new Date(a.frontmatter?.date || '')
      const dateB = new Date(b.frontmatter?.date || '')
      return dateB.getTime() - dateA.getTime()
    })
})
</script>

<template>
  <div class="article-list">
    <div v-for="post in posts" :key="post.path" class="article-card">
      <h3 class="article-title">
        <a :href="post.path">{{ post.frontmatter?.title }}</a>
      </h3>
      <p class="article-meta">
        <span class="article-date">{{ post.frontmatter?.date }}</span>
        <span class="article-tags">
          <span v-for="tag in post.frontmatter?.tags" :key="tag" class="tag">
            {{ tag }}
          </span>
        </span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.article-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.article-card {
  padding: 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  transition: all 0.2s ease;
}

.article-card:hover {
  border-color: var(--vp-c-brand-2);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.article-title {
  margin: 0 0 0.5rem 0;
  font-size: 1.125rem;
}

.article-title a {
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.article-title a:hover {
  color: var(--vp-c-brand-1);
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0;
  font-size: 0.875rem;
  color: var(--vp-c-text-3);
}

.article-tags {
  display: flex;
  gap: 0.5rem;
}

.tag {
  padding: 0.125rem 0.5rem;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  border-radius: 4px;
  font-size: 0.75rem;
}
</style>
