type RequireManifest = Array<{ loadfn: () => Promise<any>; weight: number; name?: string }>;

interface CacheInterface {
  require_manifest: RequireManifest;
  loaded: number;
  loading_target: number;
  promises: Array<Promise<any>>;
  load_all: (
    onstatusupdate: (percentage: number, text: string) => any
  ) => Promise<unknown>;
}

class Cache implements CacheInterface {
  require_manifest: RequireManifest = [];
  loaded = 0;
  loading_target = 0;
  promises: Promise<unknown>[] = [];
  constructor(require_manifest: RequireManifest) {
    this.require_manifest = require_manifest;
    for (var i = 0; i < require_manifest.length; i++)
      this.loading_target += this.require_manifest[i].weight;
  }

  load_all(onstatusupdate: (percentage: number, text: string) => any) {
    return new Promise((resolve, reject) => {
      this.require_manifest.forEach((dependency) => {
        this.promises.push(
          dependency.loadfn().then(() => {
            this.loaded += dependency.weight;
            onstatusupdate((this.loaded / this.loading_target) * 100, "Loaded " + dependency.name || '');
          })
        );
      });
      Promise.all(this.promises).then(resolve).catch(reject);
    });
  }
}

export default Cache;
