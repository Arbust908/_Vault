// Task: Group records by the value of a chosen property.

type RecordValue = Record<string, unknown>;

export function groupBy<T extends RecordValue>(
  records: readonly T[],
  property: keyof T,
): Record<string, T[]> {
  // Desicion if records is empty, we should return an empty record.
  /* if (!records || records.length === 0) {
    return {};
  }
  const recordHasProp = records.every((v) => v[property])
  if (!recordHasProp) {
    throw new Error(`Property ${String(property)} does not exist`)
  }
  const invalidValues = records.some((record) => {
    const entities = Object.entries(record);
    console.log(entities);
    const entitiesValues = entities.some(([_, value]) => {
      console.log('Type of value =>')
      console.log(typeof value)
      return typeof value !== 'string' && typeof value !== 'number'
    })
    console.log('entitiesValues', entitiesValues);
    return entitiesValues;
  })
  console.log(invalidValues);
  if (invalidValues) {
    throw new Error('Value not valid')
  }

  const validRecords = records as unknown as Record<keyof T, string | number>[];

  const results = validRecords.reduce((acc, cur) => {
    console.log('Acc', acc);
    console.log('Curr', cur);
    const propValue = cur[property];
    if (acc) {
      if (acc && acc[propValue]) {
        acc[propValue].push(cur);
      } else {
        acc[propValue] = [cur]
      }
    } else {
      acc = {
        [propValue]: [cur]
      }
    }
    return acc;
  }, {} as Record<string, T[]>);
  console.log('returns:', results);
  return results; */
  // Better option
  return records.reduce<Record<string, T[]>>((groups, record) => {
    const value = record[property];

    if (!Object.hasOwn(record, property) || (typeof value !== 'string' && typeof value !== "number")) {
      // Failing case when property does not exist or value is not allowed
      throw new TypeError(`Property ${String(property)} must be a string or number`);
    }

    const key = String(value);

    if (Object.hasOwn(groups, key)) {
      groups[key].push(record)
    } else {
      groups[key] = [record]
    }

    return groups;
  }, {})
}

// Define what happens when the property is missing or not a string/number.
// So the decision I believe that if the property is missing or is not a string or a number, we should throw an error.
