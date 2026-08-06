// Task: Determine whether all courses can be completed from their prerequisites.

export type Prerequisite = readonly [courseId: number, prerequisiteId: number];

export function canFinishCourses(
  courseCount: number,
  prerequisites: readonly Prerequisite[],
): boolean {
  throw new Error("TODO");
}

// Course IDs are zero-based; duplicate prerequisite edges do not change the result.
