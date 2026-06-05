import { useEffect, useRef } from "react";

/**
 * useScrollableList
 *
 * Attaches wheel-chunking, drag-to-scroll, and custom scrollbar-thumb
 * synchronisation to a scrollable list element.
 *
 * @param {React.RefObject} listRef  - ref attached to the scrollable container
 * @param {React.RefObject} thumbRef - ref attached to the custom scrollbar thumb image
 * @param {any[]}           deps     - extra deps that should re-run the thumb-sync
 *                                     (e.g. the filtered array so the thumb recalculates
 *                                     when items change)
 */
export function useScrollableList(listRef, thumbRef, deps = []) {
  // ── Chunked wheel scrolling ────────────────────────────────────────────────
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const CHUNK = 64 * 0.75;

    const handleWheel = (e) => {
      e.preventDefault();
      list.scrollBy({ top: e.deltaY > 0 ? CHUNK : -CHUNK });
    };

    list.addEventListener("wheel", handleWheel, { passive: false });
    return () => list.removeEventListener("wheel", handleWheel);
  }, [listRef]);

  // ── Custom scrollbar thumb sync ────────────────────────────────────────────
  useEffect(() => {
    const list = listRef.current;
    const thumb = thumbRef.current;
    if (!list || !thumb) return;

    const getEntryRightEdge = () => {
      // Works for both .world-entry and any first child of the list
      const entry = list.querySelector(".selector-entry");
      if (!entry) return null;
      const listRect = list.getBoundingClientRect();
      const entryRect = entry.getBoundingClientRect();
      return entryRect.right - listRect.left;
    };

    const syncThumb = () => {
      const { scrollTop, scrollHeight, clientHeight } = list;
      const scrollable = scrollHeight - clientHeight;

      if (scrollable <= 0) {
        thumb.style.display = "none";
        return;
      }

      const BASE_H = 128;
      const thumbH = Math.max(
        Math.round((clientHeight / scrollHeight) * BASE_H),
        20
      );

      thumb.style.height = `${thumbH}px`;
      thumb.style.transform = "none";
      thumb.style.display = "block";

      const rightEdge = getEntryRightEdge();
      if (rightEdge !== null) {
        thumb.style.left = `${Math.round(rightEdge)}px`;
        thumb.style.right = "auto";
      }

      const trackH = clientHeight - thumbH;
      const ratio = scrollTop / scrollable;
      thumb.style.top = `${Math.round(ratio * trackH + scrollTop)}px`;
    };

    syncThumb();
    list.addEventListener("scroll", syncThumb);
    window.addEventListener("resize", syncThumb);
    return () => {
      list.removeEventListener("scroll", syncThumb);
      window.removeEventListener("resize", syncThumb);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listRef, thumbRef, ...deps]);

  // ── Drag-to-scroll ─────────────────────────────────────────────────────────
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    let isDragging = false;
    let startY = 0;
    let startScrollTop = 0;

    const onMouseDown = (e) => {
      isDragging = true;
      startY = e.clientY;
      startScrollTop = list.scrollTop;
      list.style.cursor = "grabbing";
      e.preventDefault();
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      list.scrollTop = startScrollTop + 0.3 * (e.clientY - startY);
    };

    const onMouseUp = () => {
      isDragging = false;
      list.style.cursor = "grab";
    };

    list.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      list.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [listRef]);
}