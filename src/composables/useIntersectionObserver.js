import { ref, onMounted, onBeforeUnmount } from 'vue';

export default function useIntersectionObserver(options = {}) {
  const target = ref(null);
  const isIntersecting = ref(false);
  let observer;

  onMounted(() => {
    observer = new IntersectionObserver(([entry]) => {
      isIntersecting.value = entry.isIntersecting;
    }, options);

    if (target.value) {
      observer.observe(target.value);
    }
  });

  onBeforeUnmount(() => {
    if (observer && target.value) {
      observer.unobserve(target.value);
    }
  });

  return { target, isIntersecting };
}