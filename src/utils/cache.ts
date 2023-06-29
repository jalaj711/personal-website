interface RequireManifest {
  [category: string]: Array<{
    loadfn: () => Promise<any>;
    weight: number;
    name?: string;
  }>;
}

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
  require_manifest: RequireManifest = {};
  loaded = 0;
  loading_target = 0;
  promises: Promise<unknown>[] = [];
  constructor(require_manifest: RequireManifest) {
    this.require_manifest = require_manifest;
    Object.values(require_manifest).forEach((category) =>
      category.forEach((dependency) => {
        this.loading_target += dependency.weight;
      })
    );
  }

  load_all(onstatusupdate: (percentage: number, text: string) => any) {
    return new Promise((resolve, reject) => {
      Object.keys(this.require_manifest).forEach((category) => {
        this.require_manifest[category].forEach((dependency) => {
          this.promises.push(
            dependency.loadfn().then((return_val) => {
              console.log(return_val)
              if (category !== "images") {
                this.loaded += dependency.weight;
                onstatusupdate(
                  Math.round((this.loaded / this.loading_target) * 100),
                  "Finished loading " + dependency.name || ""
                );
              } else {
                this.promises.push(
                  fetch(return_val.default.src).then(() => {
                    this.loaded += dependency.weight;
                    onstatusupdate(
                      Math.round((this.loaded / this.loading_target) * 100),
                      "Finished loading " + dependency.name || ""
                    );
                  })
                );
              }
            })
          );
        });
      });
      Promise.all(this.promises).then(resolve).catch(reject);
    });
  }
}

export default Cache;
