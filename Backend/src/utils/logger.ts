type LogMeta = Record<string, unknown> | Error | undefined;

function serializeMeta(meta: LogMeta) {
  if (!meta) return undefined;
  if (meta instanceof Error) {
    return { message: meta.message, stack: meta.stack };
  }
  return meta;
}

export const logger = {
  info(message: string, meta?: LogMeta) {
    if (meta) {
      console.log(message, serializeMeta(meta));
      return;
    }
    console.log(message);
  },
  warn(message: string, meta?: LogMeta) {
    if (meta) {
      console.warn(message, serializeMeta(meta));
      return;
    }
    console.warn(message);
  },
  error(message: string, meta?: LogMeta) {
    if (meta) {
      console.error(message, serializeMeta(meta));
      return;
    }
    console.error(message);
  }
};
