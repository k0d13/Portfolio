export namespace installs {
  export function npm(name: string) {
    return async () => {
      const date = await fetch(`https://registry.npmjs.org/${name}`)
        .then((r) => r.json())
        .then((r) => new Date(r.time.created));

      let downloads = 0;
      while (date < new Date()) {
        const year = date.getFullYear();
        const d = await fetch(`https://api.npmjs.org/downloads/point/${year}-01-01:${year + 1}-01-01/${name}`)
          .then((r) => r.json())
          .then((r) => Number(r.downloads));
        downloads += d;
        date.setFullYear(date.getFullYear() + 1);
      }
      return downloads;
    };
  }

  export function millennium(id: string) {
    return async () => {
      return fetch(`https://steambrew.app/api/v1/plugin/${id}`)
        .then((r) => r.json())
        .then((r) => Number(r.downloadCount));
    };
  }
}

export namespace likes {
  export function github(repo: string) {
    return async () => {
      return fetch(`https://img.shields.io/github/stars/${repo}.json`)
        .then((r) => r.json())
        .then((r) => Number(r.message.replace('k', '000')));
    };
  }
}
