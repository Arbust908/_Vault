// Task: Build an organization forest from a flat list of employees.

export type Employee = {
  readonly id: string;
  readonly managerId: string | null;
  readonly name: string;
};

export type EmployeeNode = Employee & {
  reports: EmployeeNode[];
};

export function buildOrganizationTree(
  employees: readonly Employee[],
): EmployeeNode[] {
  throw new Error("TODO");
}

// Preserve input order among roots and siblings; every result node must be a copy.
